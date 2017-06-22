//Get a reference to the database service
var database = firebase.database();
var city;

//store the opentable URL
var restaurantQueryURL = "https://opentable.herokuapp.com/api/restaurants?city=" + city + "&page=1&per_page=15";
//console.log("inside URL: ");
//make ajax call
var restName;
var restPrice;
var restReserve;
var restID;


    $(document).ready(function () {
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
                console.log(restName);
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
    });

    
