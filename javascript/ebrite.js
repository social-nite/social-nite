// Firebase Items:
var eventUserDateStart;
var latitude;
var longitude;
var socialNiteId;

// <script src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js"></script>

// Initialize Firebase -------------------------------------------------------------------------------------

var config = {
    apiKey: "AIzaSyD-poHRyLKHSLW8kxGOz83yIR51npZy9L4",
    authDomain: "socialnite-9d0ef.firebaseapp.com",
    databaseURL: "https://socialnite-9d0ef.firebaseio.com",
    projectId: "socialnite-9d0ef",
    storageBucket: "socialnite-9d0ef.appspot.com",
    messagingSenderId: "1077453204255"
  };
  
firebase.initializeApp(config);

function getSocialNiteId() {
    var socialNiteId;
    if (localStorage.getItem("socialNiteId")) {
        socialNiteId = localStorage.getItem("socialNiteId");
    } else {
        var socialNiteIdQuery = firebase.database().ref().child("users/" + firebase.auth().currentUser.uid + "/socialNites");
        socialNiteIdQuery.once("value", function (snapshot) {
            var mostRecentSocialNiteTime = 0;
            snapshot.forEach(function (data) {
                console.log(data);
                console.log("The " + data.key + " score is " + data.val());
                var timeRef = data.child('dateAdded');
                if (timeRef.val() > mostRecentSocialNiteTime) {
                    mostRecentSocialNiteTime = timeRef.val();
                    socialNiteId = data.key;
                }
                console.log("dateAdded of current socialnite: " + timeRef.val());
                console.log("dateAdded of most recent: " + mostRecentSocialNiteTime);
                console.log("most recent socialNiteId: " + socialNiteId);
            });
            localStorage.setItem("socialNiteId", socialNiteId);
        }, function () {
            console.log("unable to query the users socialNites");
        });
    }
    return socialNiteId;
};
getSocialNiteId();

var dateQuery = firebase.database().ref().child("socialNites/" + socialNiteId);
    dateQuery.once("value", function (snapshot) {
        eventUserDateStart = snapshot.date.val();
        latitude = snapshot.latitude.val();
        longitude = snapshot.longitude.val();
    }, function () {
        console.log("unable to query the socialNite");
    });


// EVENTBRITE LOGIC, API, AND CODE BELOW: 
// ------------------------------------------------------------------------------------------------------

// ebite API token
var ebriteToken = "T63G5RF7WNPX5VDUSPII";

// // latitude and longitude will be updated on user input later. 
// var latitude = 37.7749295;
// var longitude = -122.4194155;

// Actual date will be provided by user 
// var eventUserDateStart = "2017-06-30";

//format for the Time for the API:
  //start_date.range_start: 2017-06-30T01:00:00
  //start_date.range_end: 2017-06-30T23:00:00

var localEvents = [];

var eBriteSettings = {
	"async": true,
	"crossdDomain": true,

	// URL is events by location LAT AND LONGITUDE, on a specific date, and 10mile radius
	"url": "https://www.eventbriteapi.com/v3/events/search/?token="+ ebriteToken + "&location.latitude=" + latitude + "&location.longitude=" + longitude + "&sort_by=best" + "&location.within=10mi" + "&start_date.range_start=" + eventUserDateStart + "T00:00:00" + "&start_date.range_end=" + eventUserDateStart + "T23:59:00",
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
		link.attr("target", "_blank");
		link.append(ename);

		var eventRow = $("<tr>");
		var tdEventName = $("<td>");
		var tdEventTime = $("<td>");

		var eventButton = $("<button>");
		eventButton.attr("data-Id", eventID);
		eventRow.append(eventButton);

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


// loads list on document ready so API is not called several times via onClick events
$(document).ready( function (event) {
	console.log("the button was clicked");
	callAjax();

});

function addEventToSocialNite(socialNiteId, eventObject) {
    var eventId = eventObject.id;
    var eventName = eventObject.name;
    firebase.database().ref('events/' + socialNiteId + '/' + eventId).set({
        name: eventName
    }, function (error) {
        console.log("Unable to add event: " + error.message);
        addErrorModal(error.message);
    })
}
