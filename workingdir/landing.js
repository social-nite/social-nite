// Autocomplete for Location bar --------

//var locationOptions = {
//    types: ['(cities)']
//}
//var locationInput = document.getElementById('q-city');
//var autocomplete = new google.maps.places.Autocomplete(locationInput, locationOptions);

//-----------------------------------------

// Hide/Unhide search by id

$(document).ready(function () {
    $("#change").click(function () {
        var f = !$(this).data("toggleFlag")
        //        $("#change").text("... or create a new hangout!");
        if (f) {
            console.log("entered here");
            $("#create-new").hide();
            $("#search-by-id").show();
            $("#change").text("... or create a new hangout!");
        } else {
            $("#create-new").show();
            $("#search-by-id").hide();
            $("#change").text("... or find an existing hangout!");
        }
        $(this).data("toggleFlag", f);
    });

    $('#header-side-nav-link').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '2%', // Starting top style attribute
        endingTop: '5%', // Ending top style attribute
        ready: function () {
            // Callback for Modal open. Modal and trigger parameters available.
            // console.log('modal open');
        },
        complete: function () {
            // Callback for Modal close
        }
    });
});

$('.close-btn').sideNav('hide');
$('.chips').material_chip();
