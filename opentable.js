
  


  //Get a reference to the database service
        var database = firebase.database();
        var city;

        //$("#submitBtn").on("click", function(event) {
         // event.preventDefault();
        // Grab inputs from the textboxes
          //city = $("#city").val().trim();
          //console.log("city: ",city);
          //var price = $("#price").val().trim();
          //convert from number to $ symbol
          /*if(price === "1") {
              price = "$";
              console.log("price$: ",price);
          }
          else if(price === "2") {
              price = "$$";
              console.log("price$$: ",price);
          }
          else if(price === "3") {
              price = "$$$";
              console.log("price$$$: ",price);
          }
          else if(price === "4") {
              price = "$$$$";
              console.log("price$$$$: ",price);
          }*/
        


        //store the opentable URL
  	   	var queryURL = "https://opentable.herokuapp.com/api/restaurants?city=" + city + "&page=2&per_page=15";
        console.log("inside URL: ",);

        //make ajax call
        $.ajax({
      		url: queryURL,
      		method: "GET"
    	  }).done(function(response) {

        

    	  //Store results from api call
    	  var listRestaurants = response.restaurants;	
        var restNames = [];
        var restPrice = [];
        var restReserve = [];
        var restCity = [];

        //save objects in arrays
        for(var i = 0; i < listRestaurants.length; i++) {
           		restNames = response.restaurants[i].name;
           		restPrice = response.restaurants[i].price;
           		restReserve = response.restaurants[i].reserve_url;
              //restCity = response.restaurants[i].city;
            	console.log(restNames);
            	console.log(restPrice);
            	console.log(restReserve);
              
              //prep for firebase
              var restaurants = {
              restNames: restNames,
              restPrice: restPrice,
              restReserve: restReserve,
              //restCity: restCity
              };
              // Uploads data to firebase
              database.ref('restaurants/' + socialNiteId + '/' + restaurantName).push(restaurants);

    	  	//$("#restaurants").append("<div><a href='" + restNames + "'></a>");
          //$("#price").append("<div>" + restPrice);
          //$("#reserve").append("<div>" + restReserve);
    	  }
    	});
//});
      
        
        var fbRestName;
        var fbPrice;
        var fbReserve;
        var price;
        //var fbCity;
        
        //if data in firebase...
        //database.ref().on("child_added", function(snapshot, prevChildKey) {
        var cityQuery = firebase.database().ref().child("retautants/" + socialNitesId + "/city");
            cityQuery.once("value", function (snapshot) {
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
          
    });
     

