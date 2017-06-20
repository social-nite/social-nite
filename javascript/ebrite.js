
// EVENTBRITE LOGIC, API, AND CODE BELOW: 


// ebite API token
var ebriteToken = "T63G5RF7WNPX5VDUSPII";

// latitude and longitude will be updated on user input later. 
var latitude = 37.7749295;
var longitude = -122.4194155;

// Actual date will be provided by user 
var eventUserDateStart = "2017-06-30";
// Adding 1 day to the event day provided by user so there can be a single end-time for the events presented. 
var eventUserDateEnd = moment(eventUserDateStart).add(1,"day").format("YYYY-MM-DD");

//format for the Time for the API:
  //start_date.range_start: 2017-06-30T01:00:00
  //start_date.range_end: 2017-06-30T23:00:00

var localEvents = [];

var eBriteSettings = {
	"async": true,
	"crossdDomain": true,

	// URL is events by location LAT AND LONGITUDE, on a specific date, and 10mile radius
	"url": "https://www.eventbriteapi.com/v3/events/search/?token="+ ebriteToken + "&location.latitude=" + latitude + "&location.longitude=" + longitude + "&sort_by=best" + "&location.within=10mi" + "&start_date.range_start=" + eventUserDateStart + "T00:00:00" + "&start_date.range_end=" + eventUserDateEnd + "T00:00:00",
	"method": "GET",
	"headers": {}
}

function callAjax () {
	$.ajax(eBriteSettings).done(function (data){
	console.log(data); 
	var eventNames = data.events;
	
	// loop pushes the top 10 events from eBrite to a local Array as objects. 
	for (var i = 0; i < 10; i++) {	
		localEvents.push(data.events[i]);
	}
	
	// Loop prepares the event-objects for display to HTML
	for (var i=0; i < localEvents.length; i++) {

		var time = localEvents[i].start.local
		var prettyTime = moment(time).format("lll");
		var eventID = localEvents[i].id;
		var ename = localEvents[i].name.text;
		var elink = localEvents[i].url;

		var link = $("<a>");
		link.attr("href", elink);
		link.append(ename);

		var eventRow = $("<tr>");
		var tdEventName = $("<td>");
		var tdEventTime = $("<td>");

		eventRow.addClass("event-local");
		// attribute creates ID for use later to map/load to Firebase user's event tracking.
		eventRow.attr("data-Id", eventID);

		tdEventName.append(link);
		tdEventTime.append(prettyTime);

		eventRow.append(tdEventName);
		eventRow.append(tdEventTime);
		$("#events-table").append(eventRow);
		console.log("Event rows for display: ", eventRow);

		};
	return (localEvents);
	});
};


// added onclick event for when Modal is clicked for adding events. 
$("#addEvents").on("click", function (event) {
	console.log("the button was clicked");
	callAjax();

});

