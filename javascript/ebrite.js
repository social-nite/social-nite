
// EVENTBRITE LOGIC, API, AND CODE BELOW: 

// ebite API token
var ebriteToken = "T63G5RF7WNPX5VDUSPII";

// latitude and longitude will be updated on user input later. 
var latitude = 37.7749295;
var longitude = -122.4194155;
var localEvents = [];

// 
var eBriteSettings = {
	"async": true,
	"crossdDomain": true,
	// URL is events by location LAT AND LONGITUDE and 10mile radius
	"url": "https://www.eventbriteapi.com/v3/events/search/?token="+ ebriteToken + "&location.latitude=" + latitude + "&location.longitude=" + longitude + "&location.within=10mi",
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

		var row = $("<tr>");
		var td = $("<td>");
		var td2 = $("<td>");

		row.addClass("event-local");
		// attribute creates ID for use later to map/load to Firebase user's event tracking.
		row.attr("data-Id", eventID);

		td.append(link);
		td2.append(prettyTime);

		row.append(td);
		row.append(td2);
		$("#events-table").append(row);
		console.log("Event rows for display: ", row);

	};
	return (localEvents);
});
};

callAjax();
