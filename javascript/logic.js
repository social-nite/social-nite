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
        localStorage.setItem('socialNite', socialNiteId);
        firebase.database().ref('socialNites/' + socialNiteId).set({
            date: date,
            city: city,
            latitude: latitude,
            longitude: longitude,
            timeCreated: firebase.database.ServerValue.TIMESTAMP
        }).then(function () {
            firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/socialNites/" + socialNiteId).set({
                active: true
            }).catch(function (error) {
                console.log("Unable to add socialNite to user record: " + error.message);
                addErrorModal(error.message);
            })
            console.log("Adding socialNite succeeded. Navigating to socialNite page");
            window.location.replace("https://social-nite.github.io/social-nite/app.html");
        }).catch(function (error) {
            console.log("Unable to add socialNite: " + error.message);
            addErrorModal(error.message);
        });
    });


});


