var ebriteToken = "T63G5RF7WNPX5VDUSPII";

	// searching all events for now without specific types
	// var search = "concert";

	// will change this variable to one captured from user-input
// var zip = "94105";

var latitude = 37.7749295;
var longitude = -122.4194155;
var localEvents = [];

var settings = {
	"async": true,
	"crossdDomain": true,

	// URL is events by location Zip Code and 10mile radius
	// "url": "https://www.eventbriteapi.com/v3/events/search/?token="+ ebriteToken + "&location.address=" + zip + "&location.within=10mi",

	// getting location by Latitude & Longitude 
	"url": "https://www.eventbriteapi.com/v3/events/search/?token="+ ebriteToken + "&location.latitude=" + latitude + "&location.longitude=" + longitude + "&location.within=10mi",
	
	"method": "GET",
	"headers": {}
}

function callAjax () {
	$.ajax(settings).done(function (data){
	console.log(data); 
	var eventNames = data.events;
	
	for (var i = 0; i < 10; i++) {	
		localEvents.push(data.events[i]);
	}
	
	whatArray();
	

	for (var i=0; i < localEvents.length; i++) {

		var time = localEvents[i].start.local
		var prettyTime = moment(time).format("lll");

		$("#events-table > tbody").append("<tr><td>" + localEvents[i].name.text + "   <a href='" + localEvents[i].url + "'> Link </a>" + "</td><td>" + prettyTime + "</td></tr>");

		// console.log("event name: ", localEvents[i].name.text);
		// console.log("event date: ", localEvents[i].start.local);
		// console.log("event description: ", localEvents[i].description.text);
	};


	return (localEvents);


});
};

callAjax();

function whatArray() {

	console.log("returned array of objects: ", localEvents);

};

//When the localEvents is updated with the 10 events, THEN run this loop to push to HTML:

for (var i=0; i < localEvents.length; i++) {

	console.log("event name: ", localEvents[i].name.text);
	console.log("event date: ", localEvents[i].start.local);
	console.log("event description: ", localEvents[i].description.text);
}