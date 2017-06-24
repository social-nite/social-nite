var socialNiteId;
var date = "";
var latitude = 0;
var longitude = 0;
var city = "";

//generates a unique id for the socialNite Id
function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

//generates pieces of the unique socialNite Id
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

//gets the city from the google maps api response
function getCity(locationData) {
    var city;
    for (var i = 0; i < locationData.address_components.length; i++) {
        if (locationData.address_components[i].types.includes("locality")) {
            city = locationData.address_components[i].long_name;
            return city;
        }
    }
    return city;
}

// Validates that the input string is a valid date formatted as "yyy/mm/dd"
function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("-");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);
    console.log("Day: " + day);
    console.log("Month: " + month);
    console.log("Year: " + year);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    console.log(day > 0 && day <= monthLength[month - 1]);
    return day > 0 && day <= monthLength[month - 1];
};

// asserts that given email matches the standard email format
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//asserts that the socialniteid is the valid guid format
function validateSocialNiteId(socialNite) {
    var re = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return re.test(socialNite);
}

function convertPriceToDollarSigns(restPrice) {
    //convert from price number to $ symbol
    var price;
    if (restPrice === 1) {
        price = "$";
    }
    else if (restPrice === 2) {
        price = "$$";
        //console.log("price$$: ",price);
    }
    else if (restPrice === 3) {
        price = "$$$";
    }
    else if (restPrice === 4) {
        price = "$$$$";
    }
    return price;
}

function getSocialNiteId() {
    var socialNite;
    if (localStorage.getItem("socialNiteId")) {
        console.log("socialnite in local storage returned");
        socialNite = localStorage.getItem("socialNiteId");
    } else {
        console.log("socialnite in firebase returned");
        var socailNiteIdQuery = firebase.database().ref().child("users/" + firebase.auth().currentUser.uid + "/socialNites");
        socailNiteIdQuery.once("value", function (snapshot) {
            var mostRecentSocialNiteTime = 0;
            snapshot.forEach(function (data) {
                console.log(data);
                console.log("The " + data.key + " score is " + data.val());
                var timeRef = data.child('dateAdded');
                if (timeRef.val() > mostRecentSocialNiteTime) {
                    mostRecentSocialNiteTime = timeRef.val();
                    socialNite = data.key;
                }
                console.log("dateAdded of current socialnite: " + timeRef.val());
                console.log("dateAdded of most recent: " + mostRecentSocialNiteTime);
                console.log("most recent socialNiteId: " + socialNite);
            });
            localStorage.setItem("socialNiteId", socialNite);
        }, function () {
            console.log("unable to query the users socialNites");
        });
    }
    return socialNite;
}

//gets the date, city, latitude, longitude info for a socialnite
//also loads the events and restaurants associated with the socialnite
function intializeSocialNite() {
    if (socialNiteId !== true) {
        console.log("getting socialniteid");
        socialNiteId = getSocialNiteId();
        console.log("socialniteid: " + socialNiteId);
    }
    var socialNiteQuery = firebase.database().ref().child("socialNites/" + socialNiteId);
    socialNiteQuery.once("value", function (snapshot) {
        console.log(snapshot.val());
        date = snapshot.val().date;
        city = snapshot.val().city;
        latitude = snapshot.val().latitude;
        longitude = snapshot.val().longitude;
        console.log("date: " + date);
        console.log("city: " + city);
        console.log("latitude: " + latitude);
        console.log("longitude: " + longitude);
        calleBriteAjax();
        callRestaurantAjax();
        renderEvents(socialNiteId);
        renderRestaurants(socialNiteId);
        renderMembers(socialNiteId);
        renderSocialNiteToSideNav();
    }, function () {
        console.log("unable to get social nite info");
    });
}

// addes the user to the socialnite in firebase
function addUserToSocialNite(socialNiteId) {
    var userUid = firebase.auth().currentUser.uid;
    firebase.database().ref('members/' + socialNiteId).set({
        [userUid]: true
    }).catch(function (error) {
        console.log("Unable to add socialNite to user record: " + error.message);
        addErrorModal(error.message);
    });
}

//adds the socialnite to the user in firebase
function addSocialNiteToUser(socialNiteId) {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/socialNites/" + socialNiteId).set({
        active: true,
        votesRemaining: 10,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    }).catch(function (error) {
        console.log("Unable to add socialNite to user record: " + error.message);
        addErrorModal(error.message);
    });
    console.log("Adding socialNite succeeded.");
}

//gets the number of votes the current user has remaining for the socialnite
function getVotesRemaining(socialNiteId) {
    var votesRemainingQuery = firebase.database().ref().child("users/" + firebase.auth().currentUser.uid + "/socialNites/" + socialNiteId + "/votesRemaining");
    votesRemainingQuery.once("value", function (snapshot) {
        var votesRemaining = snapshot.val();
        console.log("votes remaining for user: " + votesRemaining);
        return votesRemaining;
    }, function () {
        console.log("unable to query the number of remaining votes");
    });
}

//removes a vote from a user
function removeVoteFromUser(socialNiteId) {
    console.log("removing vote from user for socialNiteId: " + socialNiteId);
    var votesRemainingRef = firebase.database().ref('users').child(firebase.auth().currentUser.uid).child('socialNites').child(socialNiteId).child('votesRemaining');
    votesRemainingRef.transaction(function (votes) {
        // console.log("Votes remaining: " + (votes || 0) - 1);
        return (votes || 0) - 1;
    });
}

// handles adding vote (upvote or downvote) to the event/restaurant 
// itemVotedOn should be 'restaurant' or 'event'
// isUpvote should be true if it is upvote, false if downvote
function addVote(socialNiteId, itemVotedOn, itemId, isUpvote) {
    var currentUserObj = firebase.auth().currentUser;

    //determine if restaurant or event was voted on
    if (itemVotedOn === 'restaurant') {
        console.log("restaurant voted on: " + itemId);
        var databaseRef = firebase.database().ref('restaurants').child(socialNiteId).child(itemId).child('voteCount');
    } else {
        console.log("event voted on: " + itemId);
        var databaseRef = firebase.database().ref('events').child(socialNiteId).child(itemId).child('voteCount');
    }

    //determine the number of remaining votes
    var votesRemainingQuery = firebase.database().ref().child("users/" + firebase.auth().currentUser.uid + "/socialNites/" + socialNiteId + "/votesRemaining");
    var votesRemaining = 0;
    votesRemainingQuery.once("value", function (snapshot) {
        votesRemaining = snapshot.val();
        console.log("votes remaining for user: " + votesRemaining);
        return votesRemaining;
    }, function () {
        console.log("unable to query the number of remaining votes");
    }).then(function () {
        //if user has votes remaining, upvote or downvote the selection
        if (votesRemaining > 0) {
            if (isUpvote) {
                console.log("increasing vote count");
                console.log(databaseRef.toString());
                databaseRef.transaction(function (votes) {
                    return (votes || 0) + 1;
                });
            } else {
                console.log("decreasing vote count");
                databaseRef.transaction(function (votes) {
                    return (votes || 0) - 1;
                });
            }
            removeVoteFromUser(socialNiteId)
        } else {
            console.log("No votes remaining");
        }
    });

}

function prependEventToList(data) {
    var eventID = data.key;
    var name = data.val().name;
    var time = data.val().time;
    var url = data.val().url;
    var votes = data.val().voteCount;

    var link = $("<a>");
    link.attr("href", url);
    link.attr("target", "_blank");
    link.append(name);

    var buttons = $("<div>");

    var upvoteBtn = $("<button>");
    upvoteBtn.addClass("upvoteEvent");

    var upvoteBtnIcon = $("<i>");
    upvoteBtnIcon.addClass("fa fa-arrow-circle-up fa-2");
    upvoteBtn.append(upvoteBtnIcon);

    var downvoteBtn = $("<button>");
    downvoteBtn.addClass("downvoteEvent");

    var downvoteBtnIcon = $("<i>");
    downvoteBtnIcon.addClass("fa fa-arrow-circle-down fa-2");
    downvoteBtn.append(downvoteBtnIcon);

    buttons.append(upvoteBtn);
    buttons.append(downvoteBtn);


    var eventRow = $("<tr>");
    var tdVoteButtons = $("<td>");
    var tdEventName = $("<td>");
    var tdEventTime = $("<td>");
    var tdEventVotes = $("<td>");

    // attribute creates ID for use later to map/load to Firebase user's event tracking.
    eventRow.attr("data-id", eventID);

    tdVoteButtons.append(buttons);
    tdEventName.append(link);
    tdEventTime.append(time);
    tdEventVotes.append(votes);

    eventRow.append(tdVoteButtons);
    eventRow.append(tdEventName);
    eventRow.append(tdEventTime);
    eventRow.append(tdEventVotes);
    $("#events-list").prepend(eventRow);
}

function prependFoodToList(data) {
    var restaurantID = data.key;
    var name = data.val().name;
    var url = data.val().url;
    var votes = data.val().voteCount;
    var price = convertPriceToDollarSigns(data.val().price);

    var link = $("<a>");
    link.attr("href", url);
    link.attr("target", "_blank");
    link.append(name);

    var buttons = $("<div>");
    var upvoteBtn = $("<button>");
    upvoteBtn.addClass("upvoteFood");

    var upvoteBtnIcon = $("<i>");
    upvoteBtnIcon.addClass("fa fa-arrow-circle-up fa-2");
    upvoteBtn.append(upvoteBtnIcon);

    var downvoteBtn = $("<button>");
    downvoteBtn.addClass("downvoteFood");

    var downvoteBtnIcon = $("<i>");
    downvoteBtnIcon.addClass("fa fa-arrow-circle-down fa-2");
    downvoteBtn.append(downvoteBtnIcon);

    buttons.append(upvoteBtn);
    buttons.append(downvoteBtn);

    var restaurantRow = $("<tr>");
    var tdVoteButtons = $("<td>");
    var tdRestaurantName = $("<td>");
    var tdRestaurantPrice = $("<td>");
    var tdRestaurantVotes = $("<td>");

    // attribute creates ID for use later to map/load to Firebase user's event tracking.
    restaurantRow.attr("data-id", restaurantID);

    tdVoteButtons.append(buttons);
    tdRestaurantName.append(link);
    tdRestaurantPrice.append(price);
    tdRestaurantVotes.append(votes);

    restaurantRow.append(tdVoteButtons);
    restaurantRow.append(tdRestaurantName);
    restaurantRow.append(tdRestaurantPrice);
    restaurantRow.append(tdRestaurantVotes);
    $("#food-container").prepend(restaurantRow);
}

function addMemberToList(userId) {
    var userRef = firebase.database().ref("users").child(userId);
    userRef.once("value", function (snapshot) {
        console.log(snapshot.val().name);
        var userLi = $("<li>");
        userLi.text(snapshot.val().name);
        $("#member-container").append(userLi);
    });
}

function renderSocialNiteToSideNav() {
    var userRef = firebase.database().ref("users").child(firebase.auth().currentUser.uid).child("socialNites");
    userRef.once("value", function (snapshot) {
        snapshot.forEach(function (data) {
            console.log(data.key);
            //get date of social nite
            var socialNiteRef = firebase.database().ref("socialNites").child(data.key);
            socialNiteRef.once("value", function (snap) {
                console.log(snap.val().date);
                var socialNiteLi = $("<li>");
                socialNiteLi.attr("data-socialniteid", data.key);
                socialNiteLi.addClass("socialnite-list-item");
                socialNiteLi.text(snap.val().city + " on " + snap.val().date);
                $("#hangouts-list").append(socialNiteLi);
            });

        });
    });
}

//renders members on app page
function renderMembers(socialNiteId) {
    var membersRef = firebase.database().ref("members").child(socialNiteId);
    membersRef.on("value", function (snapshot) {
        $("#member-container").empty();
        snapshot.forEach(function (data) {
            console.log(data.key);
            addMemberToList(data.key);
        });
    });
}

//renders restaurants on app page according to their voteCount (highest at top)
function renderRestaurants(socialNiteId) {
    var votesRef = firebase.database().ref("restaurants").child(socialNiteId);
    votesRef.orderByChild('voteCount').on("value", function (snapshot) {
        $("#food-container").empty();
        snapshot.forEach(function (data) {
            prependFoodToList(data);
        });
    });
}

//renders events on app page according to their voteCount (highest at top)
function renderEvents(socialNiteId) {
    var votesRef = firebase.database().ref("events").child(socialNiteId);
    votesRef.orderByChild('voteCount').on("value", function (snapshot) {
        $("#event-container").empty();
        snapshot.forEach(function (data) {
            prependEventToList(data);
        });
    });
}

//adds event clicked on event modal to firebase
$(document).on("click", ".event-local", function () {
    var eventId = $(this).data("id");
    var eventName = $(this).data("name");
    var eventUrl = $(this).data("url");
    var eventTime = $(this).data("time");

    var eventRef = firebase.database().ref('events/' + socialNiteId + '/' + eventId);
    eventRef.once("value").then(function (snapshot) {
        if (snapshot.exists()) {
            console.log("event already added");
        } else {
            eventRef.set({
                name: eventName,
                url: eventUrl,
                time: eventTime,
                voteCount: 0
            }).catch(function (error) {
                console.log("Unable to add event: " + error.message);
                addErrorModal(error.message);
            });
        }
    });
});

//adds restaurant clicked on Food modal to firebase
$(document).on("click", ".restaurant-local", function () {
    var restaurantId = $(this).data("id");
    var restaurantName = $(this).data("name");
    var restaurantUrl = $(this).data("url");
    var restaurantPrice = $(this).data("price");

    var restaurantRef = firebase.database().ref('restaurants/' + socialNiteId + '/' + restaurantId);
    restaurantRef.once("value").then(function (snapshot) {
        if (snapshot.exists()) {
            console.log("restaurant already added");
        } else {
            restaurantRef.set({
                name: restaurantName,
                url: restaurantUrl,
                price: restaurantPrice,
                voteCount: 0
            }).catch(function (error) {
                console.log("Unable to add restaurant: " + error.message);
                addErrorModal(error.message);
            });
        }
    });
});

//handles when a user is adding a social nite they did not create
//adds socialnite to the user, the socialnite
//stores socialniteid in localstorage
//redirects user to app.html
//verifies user is logged in before adding
$(document).on("click", "#search-id", function () {
    event.preventDefault();
    if (firebase.auth().currentUser) {
        var socialNite = $("#search").val().trim();
        if (validateSocialNiteId(socialNite)) {
            localStorage.setItem('socialNiteId', socialNite);
            //adding social nite to user
            addSocialNiteToUser(socialNite);

            //adding user to social nite
            addUserToSocialNite(socialNite);

            console.log("Adding socialNite succeeded. Navigating to socialNite page");
            window.location.replace("https://social-nite.github.io/social-nite/app.html");
        } else {
            console.log("Invalid socialnite id");
        }
    } else {
        console.log("Please log in. pop up login modal");
    }
});


//handles when user clicks the submit button on landing page
//creates new socialnite in firebase and addes it to the current user
//uses googlemaps api to get the city, lat, and long values
// validates that a valid date is provided
$("#submit").on("click", function () {
    event.preventDefault();
    var newDate = $("#datePicker").val().trim();
    console.log(newDate);
    date = newDate;
    var location = $("#location").val().trim();
    // validates that a valid date is provided
    if (isValidDate(newDate)) {

        //generates a socialNiteId
        var socialNiteId = guid();
        console.log(socialNiteId);

        //gets the city, latitude, and longitude from googlemaps api
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyBxgMHK10T-YS90r9OQhsSJm_aeEFAGcZ8",
            "method": "GET"
        }

        $.ajax(settings).done(function (response) {
            var results = response.results[0];
            city = getCity(results);
            latitude = response.results[0].geometry.location.lat;
            longitude = response.results[0].geometry.location.lng;

            console.log("attempting to add socialNite record to db");
            localStorage.setItem('socialNiteId', socialNiteId);
            firebase.database().ref('socialNites/' + socialNiteId).set({
                date: date,
                city: city,
                latitude: latitude,
                longitude: longitude,
                timeCreated: firebase.database.ServerValue.TIMESTAMP
            }).then(function () {
                //adding social nite to user
                addSocialNiteToUser(socialNiteId);

                //adding user to social nite
                addUserToSocialNite(socialNiteId);
                console.log("Adding user to socialNite succeeded.");

                //naviting user to socialnite page
                window.location.replace("https://social-nite.github.io/social-nite/socialnite.html");
            }, function (error) {
                console.log("Unable to add socialNite: " + error.message);
                addErrorModal(error.message);
            }

                );
        });
    } else {
        console.log("Invalid date provided");
    }
});

//when in the 'Friends' modal a user clicks 'send' email this opens their email client
// and populates the email with the relevant content
$("#send-email").on("click", function () {
    event.preventDefault();
    var email = $("#emailInput").val().trim();
 
    if (validateEmail(email)) {
        var subject = "You've been invited to join SocialNite";
        var emailBody = "Hello, " + firebase.auth().currentUser.displayName + " has invited you to join Social Nite! Click here: https://social-nite.github.io/social-nite/login.html Enter this id on the page after you login: " + socialNiteId;
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    } else {
        console.log("Please provide a valid email");
    }
});

$(document).on("click", ".upvoteFood", function (event) {
    var restaurantId = $(this).parent().parent().parent().data("id");
    addVote(socialNiteId, "restaurant", restaurantId, true);
});

$(document).on("click", ".downvoteFood", function (event) {
    var restaurantId = $(this).parent().parent().parent().data("id");
    addVote(socialNiteId, "restaurant", restaurantId, false);
});

$(document).on("click", ".upvoteEvent", function (event) {
    var eventId = $(this).parent().parent().parent().data("id");
    addVote(socialNiteId, "event", eventId, true);
});

$(document).on("click", ".downvoteEvent", function (event) {
    var eventId = $(this).parent().parent().parent().data("id");
    addVote(socialNiteId, "event", eventId, false);
});

//opens the Food modal
$(document).on("click", "#addFood", function (event) {
    console.log("opening modal");

    $('#modalFood').modal('open');
    $('#modalFood').css('display', 'block');
});

//opens the events modal
$(document).on("click", "#addEvents", function (event) {
    console.log("opening modal");

    $('#modalEvents').modal('open');
    $('#modalEvents').css('display', 'block');
});

//opens the friends modal
$(document).on("click", "#addFriends", function (event) {
    console.log("opening modal");

    $('#modalFriends').modal('open');
    $('#modalFriends').css('display', 'block');
});

//closes the modal
$(document).on("click", ".modal-close", function () {
    console.log("closing modal");
    $(this).parent().parent().css("display", "none");
});

$(document).on("click", ".socialnite-list-item", function () {
    console.log("loading new socialnite");
    localStorage.setItem("socialNiteId", $(this).data("socialniteid"));
    window.location.reload(false);
})


// EVENTBRITE LOGIC, API, AND CODE BELOW: 
// ------------------------------------------------------------------------------------------------------

function calleBriteAjax() {
    // ebite API token
    var ebriteToken = "T63G5RF7WNPX5VDUSPII";
    var eventUserDateStart = date;

    //format for the Time for the API:
    //start_date.range_start: 2017-06-30T01:00:00
    //start_date.range_end: 2017-06-30T23:00:00

    var localEvents = [];

    var eBriteSettings = {
        "async": true,
        "crossdDomain": true,

        // URL is events by location LAT AND LONGITUDE, on a specific date, and 10mile radius
        "url": "https://www.eventbriteapi.com/v3/events/search/?token=" + ebriteToken + "&location.latitude=" + latitude + "&location.longitude=" + longitude + "&sort_by=best" + "&location.within=10mi" + "&start_date.range_start=" + eventUserDateStart + "T00:00:00" + "&start_date.range_end=" + eventUserDateStart + "T23:59:00",
        "method": "GET",
        "headers": {}
    }
    $.ajax(eBriteSettings).done(function (data) {
        console.log(data);
        var eventNames = data.events;

        // loop pushes the top 10 events from eBrite to a local Array as objects. 
        for (var i = 0; i < 10; i++) {
            localEvents.push(data.events[i]);
        }

        // Loop prepares the event-objects for display to HTML
        for (var i = 0; i < localEvents.length; i++) {
            console.log(localEvents[i]);
            var time = localEvents[i].start.local;
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

            eventRow.addClass("event-local");
            // attribute creates ID for use later to map/load to Firebase user's event tracking.
            eventRow.attr("data-Id", eventID);
            eventRow.attr("data-name", ename);
            eventRow.attr("data-url", elink);
            eventRow.attr("data-time", prettyTime);

            tdEventName.append(link);
            tdEventTime.append(prettyTime);

            eventRow.append(tdEventName);
            eventRow.append(tdEventTime);
            $("#events-table").append(eventRow);
            // console.log("Event rows for display: ", eventRow);

        };
        return (localEvents);
    });
};

// RESTAURANT LOGIC, API, AND CODE BELOW: 
// ------------------------------------------------------------------------------------------------------

function callRestaurantAjax() {
    //store the opentable URL
    var restaurantQueryURL = "https://opentable.herokuapp.com/api/restaurants?city=" + city + "&page=1&per_page=15";

    var restName;
    var restPrice;
    var restReserve;
    var restID;

    $.ajax({
        url: restaurantQueryURL,
        method: "GET"
    }).done(function (response) {
        //Store results from api call
        var listRestaurants = response.restaurants;
        var localRestaurants = [];

        // loop pushes the top 10 restaurants from opentable to a local Array as objects. 
        for (var i = 0; i < 10; i++) {
            localRestaurants.push(response.restaurants[i]);
        }
        //// Loop prepares the restaurant-objects for display to HTML
        for (var i = 0; i < localRestaurants.length; i++) {
            restName = response.restaurants[i].name;
            restPrice = response.restaurants[i].price;
            restReserve = response.restaurants[i].reserve_url;
            restID = response.restaurants[i].id;

            var price = convertPriceToDollarSigns(restPrice);

            // Change the HTML
            var link = $("<a>");
            link.attr("href", restReserve);
            link.attr("target", "_blank");
            link.append(restName);

            var row = $("<tr>");
            var td = $("<td>");
            var td2 = $("<td>");
            row.addClass("restaurant-local");
            row.attr("data-Id", restID)
            row.attr("data-name", restName)
            row.attr("data-url", restReserve)
            row.attr("data-price", restPrice)
            td.append(link);
            td2.append(price);
            row.append(td);
            row.append(td2);
            $("#food-table").append(row);
        }
    });
};


// loads list on document ready so API is not called several times via onClick events
$(document).ready(function (event) {
    if (window.location.pathname.includes("/socialnite.html")) {
        intializeSocialNite(socialNiteId);
        console.log(socialNiteId);
        console.log("document loaded for events");
    }
});

