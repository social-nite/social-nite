function getLocationData(location) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyBxgMHK10T-YS90r9OQhsSJm_aeEFAGcZ8",
        "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        var city = response.results[0].address_components[1].long_name;
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
    getLocationData(location);
});


