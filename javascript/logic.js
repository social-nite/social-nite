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

// asserts that given email matches the standard email format
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateSocialNiteId(socialNite) {
    var re = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return re.test(socialNite);
}

function getSocialNiteId() {
    var socialNiteId;
    if (localStorage.getItem("socialNiteId")) {
        socialNiteId = localStorage.getItem("socialNiteId");
    } else {
        var socailNiteIdQuery = firebase.database().ref().child("users/" + firebase.auth().currentUser.uid + "/socialNites");
        socailNiteIdQuery.once("value", function (snapshot) {
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
}

function addUserToSocialNite(socialNiteId) {
    var userUid = firebase.auth().currentUser.uid;
    firebase.database().ref('members/' + socialNiteId).set({
        [userUid]: true
    }, function (error) {
        console.log("Unable to add socialNite to user record: " + error.message);
        addErrorModal(error.message);
    })
}

function addSocialNiteToUser(socialNiteId) {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/socialNites/" + socialNiteId).set({
        active: true,
        votesRemaining: 5,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    }, function (error) {
        console.log("Unable to add socialNite to user record: " + error.message);
        addErrorModal(error.message);
    })
    console.log("Adding socialNite succeeded.");
}

function votesRemaining(socialNiteId) {
    var votesRemaining = 0;
    var votesRemainingQuery = firebase.database().ref().child("users/" + firebase.auth().currentUser.uid + "/socialNites/" + socialNiteId + "/votesRemaining");
    votesRemainingQuery.once("value", function (snapshot) {
        votesRemaining = snapshot.val();
    }, function () {
        console.log("unable to query the number of remaining votes");
    });
    console.log("votes remaining for user: " + votesRemaining);
    return votesRemaining;
}

function removeVoteFromUser(socialNiteId) {
    console.log("removing vote from user for socialNiteId: " + socialNiteId);
    var votesRemainingRef = firebase.database().ref('users').child(firebase.auth().currentUser.uid).child('socialNites').child(socialNiteId).child('votesRemaining');
    votesRemainingRef.transaction(function (votes) {
        console.log("Votes remaining: " + (votes || 0) - 1);
        return (votes || 0) - 1;
    });
}

function addVote(socialNiteId, itemVotedOn, isUpvote) {
    var currentUserObj = firebase.auth().currentUser;
    //determine if restaurant or event was voted on
    if (itemVotedOn === 'restaurant') {
        console.log("restaurant voted on: " + itemVotedOn);
        var databaseRef = firebase.database().ref('restaurants').child(itemVotedOn).child('votes');
    } else {
        console.log("event voted on: " + itemVotedOn);
        var databaseRef = firebase.database().ref('events').child(itemVotedOn).child('votes');
    }
    //if user has votes remaining, upvote or downvote the selection
    if (votesRemaining(socialNiteId) > 0) {
        if (isUpvote) {
            databaseRef.transaction(function (votes) {
                return (votes || 0) + 1;
            });
        } else {
            databaseRef.transaction(function (votes) {
                return (votes || 0) - 1;
            });
        }
        removeVoteFromUser(socialNiteId)
    } else {
        console.log("No votes remaining");
    }
}

function renderRestaurants(socialNiteId) {
    var votesRef = firebase.database().ref("restaurants").child(socialNiteId);
    votesRef.orderByChild('voteCount').on("value", function (snapshot) {
        snapshot.forEach(function (data) {
            console.log("The " + data.key + " score is " + data.val().voteCount);
        });
    });
}

function renderEvents(socialNiteId) {
    var votesRef = firebase.database().ref("events").child(socialNiteId);
    votesRef.orderByChild('voteCount').on("value", function (snapshot) {
        snapshot.forEach(function (data) {
            console.log("The " + data.key + " score is " + data.val().voteCount);
        });
    });
}

$("#addSocialNite").on("click", function () {
    event.preventDefault();
    var socialNite = $("#socialNiteId").val().trim();
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
})

$("#search").on("click", function () {
    event.preventDefault();
    var date = $("#date").val().trim();
    var location = $("#location").val().trim();
    var socialNiteId = guid();
    console.log(socialNiteId);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyBxgMHK10T-YS90r9OQhsSJm_aeEFAGcZ8",
        "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        var results = response.results[0];
        var city = getCity(results);
        var latitude = response.results[0].geometry.location.lat;
        var longitude = response.results[0].geometry.location.lng;

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

            window.location.replace("https://social-nite.github.io/social-nite/app.html");
        }, function (error) {
            console.log("Unable to add socialNite: " + error.message);
            addErrorModal(error.message);
        }

            );
    });
});

$("#send-email").on("click", function () {
    event.preventDefault();
    var email = $("#emailInput").val().trim();
    //will need to add social nite id to the email as well. 
    if (validateEmail(email)) {
        var subject = "You've been invited to join SocialNite";
        var emailBody = "Hello, " + firebase.auth().currentUser.displayName + " has invited you to join Social Nite! Click here: https://social-nite.github.io/social-nite/login.html Enter this id on the page after you login: " + getSocialNiteId();
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    } else {
        console.log("Please provide a valid email");
    }
});

$(document).on("click", "#addFood", function (event) {
    console.log("opening modal");

    $('#modalFood').modal('open');
    $('#modalFood').css('display', 'block');
});

$(document).on("click", "#addEvents", function (event) {
    console.log("opening modal");

    $('#modalEvents').modal('open');
    $('#modalEvents').css('display', 'block');
});

$(document).on("click", "#addFriends", function (event) {
    console.log("opening modal");

    $('#modalFriends').modal('open');
    $('#modalFriends').css('display', 'block');
});

$(document).on("click", ".modal-close", function () {
    console.log("closing modal");
    $(this).parent().parent().css("display", "none");
});

var socialNiteId = getSocialNiteId();
