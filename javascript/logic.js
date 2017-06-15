function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function getCity(locationData) {
    var city;
    for(var i=0; i<locationData.address_components.length; i++) {
        if (locationData.address_components[i].types.includes("locality")) {
            city = locationData.address_components[i].long_name;
            return city; 
        }
    }
    return city;
}

function handleLocationData(location) {
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
        console.log(city);
        console.log(latitude);
        console.log(longitude);
        sessionStorage.setItem('city', city);
        sessionStorage.setItem('latitude', latitude);
        sessionStorage.setItem('longitude', longitude);
    });
}




$("#search").on("click", function () {
    event.preventDefault();
    var date = $("#date").val().trim();
    var location = $("#location").val().trim();
    handleLocationData(location);
    var socialNiteId = guid();
    console.log(socialNiteId);
});


