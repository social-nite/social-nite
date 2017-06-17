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
                if(timeRef.val() > mostRecentSocialNiteTime) {
                    mostRecentSocialNiteTime = timeRef.val();
                    socialNiteId = data.key;
                }
                console.log("dateAdded of current socialnite: " + timeRef.val());
                console.log("dateAdded of most recent: " + mostRecentSocialNiteTime);
                console.log("most recent socialNiteId: " + socialNiteId);
            });
            localStorage.setItem("socialNiteId", socialNiteId);
        }, function(){
            console.log("unable to query the users socialNites");
        });
    }
    return socialNiteId;
}

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
            firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/socialNites/" + socialNiteId).set({
                active: true,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            }, function (error) {
                console.log("Unable to add socialNite to user record: " + error.message);
                addErrorModal(error.message);
            })
            console.log("Adding socialNite succeeded. Navigating to socialNite page");
            window.location.replace("https://social-nite.github.io/social-nite/test.html");
        }, function (error) {
            console.log("Unable to add socialNite: " + error.message);
            addErrorModal(error.message);
        });
    });
});

$("#send-email").on("click", function () {
    event.preventDefault();
    var email = $("#email").val().trim();
    //will need to add social nite id to the email as well. 
    if (validateEmail(email)) {
        var subject = "You've been invited to join SocialNite";
        var emailBody = "Hello, " + firebase.auth().currentUser.displayName + " has invited you to join Social Nite!" +
            " Click here: https://social-nite.github.io/social-nite/login.html";
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    } else {
        console.log("Please provide a valid email");
    }
})


