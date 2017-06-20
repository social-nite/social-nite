//Get a reference to the database service
var database = firebase.database();
var city;
//store the opentable URL
var queryURL = "https://opentable.herokuapp.com/api/restaurants?city=San%20Francisco&page=2&per_page=15";
//console.log("inside URL: ");
//make ajax call
function callAjax() {
    $(document).ready(function () {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            //Store results from api call
            var listRestaurants = response.restaurants;
            var localRestaurants = [];
            //var restNames = [];
            //var restPrice = [];
            // var restReserve = [];
            //var restCity = [];
            // loop pushes the top 10 events from opentable to a local Array as objects. 
            for (var i = 0; i < 10; i++) {
                localRestaurants.push(response.restaurants[i]);
            }
            //// Loop prepares the restaurant-objects for display to HTML
            for (var i = 0; i < localRestaurants.length; i++) {
                var restNames = response.restaurants[i].name;
                var restPrice = response.restaurants[i].price;
                var restReserve = response.restaurants[i].reserve_url;
                var restID = response.restaurants[i].id;
                console.log(restNames);
                console.log(restPrice);
                console.log(restReserve);
                console.log(restID);

                //convert from price number to $ symbol
                if(restPrice === 1) {
                  price = "$";
                }
                else if(restPrice === 2) {
                price = "$$";
                //console.log("price$$: ",price);
                }
                else if(restPrice === 3) {
                price = "$$$";
                }
                else if(restPrice === 4) {
                price = "$$$$";
                }
                // Change the HTML
                var link = $("<a>");
                link.attr("href", restReserve);
                link.append(restNames);
                var row = $("<tr>");
                var td = $("<td>");
                var td2 = $("<td>");
                row.addClass("restaurant-local");
                row.attr("rest-Id", restID)
                td.append(link);
                td2.append(price);
                row.append(td);
                row.append(td2);
                $("#food-table").append(row);
            }
        });
    });
};
callAjax();
    //prep for firebase
    // var restaurants = {
    //     restNames: restNames,
    //     restPrice: restPrice,
    //     restReserve: restReserve,
        //restCity: restCity
    // };
    // Uploads data to firebase
    // database.ref('restaurants/' + '42c474b8-7963-d1e5-1152-90ff30cbb4e6' + '/' + restaurantName).set(restaurants);
            //$("#restaurants").append("<div><a href='" + restNames + "'></a>");
          //$("#price").append("<div>" + restPrice);
          //$("#reserve").append("<div>" + restReserve);
          //});
        /*var fbRestName;
        var fbPrice;
        var fbReserve;
        var price;
        //var fbCity;
        
        //if data in firebase...
        //database.ref().on("child_added", function(snapshot, prevChildKey) {
        var cityQuery = firebase.database().ref().child("restaurants/" + '42c474b8-7963-d1e5-1152-90ff30cbb4e6');
            cityQuery.once("value", function (snapshot) {
              console.log(snapshot.val());
            fbRestName = snapshot.val().restNames;
            //console.log("restName", fbRestName);
            fbPrice = snapshot.val().restPrice;
            fbReserve = snapshot.val().restReserve;
            //fbCity = childSnapshot.val().restCity;
          //convert from price number to $ symbol
            if(fbPrice === 1) {
              price = "$";
              //console.log("price$: ",price);
            }
            else if(fbPrice === 2) {
              price = "$$";
             //console.log("price$$: ",price);
            }
            else if(fbPrice === 3) {
              price = "$$$";
              //console.log("price$$$: ",price);
            }
            else if(fbPrice === 4) {
              price = "$$$$";
              //console.log("price$$$$: ",price);
            }
              
          // Change the HTML
          $("#food-table").append("<tr><td><a href='" + fbReserve + "'</a>" + fbRestName + "</td><td>" + price + "</td></tr>");
          
          //$("#reserve").append("<div>" + fbReserve);
      
     
    // If any errors are experienced, log them to console.
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
          
    }*/
