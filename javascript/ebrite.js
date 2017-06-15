var ebriteToken = "T63G5RF7WNPX5VDUSPII";

	// searching all events for now without specific types
	// var search = "concert";

	// will change this variable to one captured from user-input
var zip = "94105";
var localEvents = [];

var settings = {
	"async": true,
	"crossdDomain": true,

	// URL is events by location Zip Code and 10mile radius
	"url": "https://www.eventbriteapi.com/v3/events/search/?token="+ ebriteToken + "&location.address=" + zip + "&location.within=10mi",
	
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
	
	return (localEvents);

});
};

callAjax();

function whatArray() {

	console.log("returned array of objects: ", localEvents);

};
