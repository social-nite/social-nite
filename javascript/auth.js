// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-poHRyLKHSLW8kxGOz83yIR51npZy9L4",
    authDomain: "socialnite-9d0ef.firebaseapp.com",
    databaseURL: "https://socialnite-9d0ef.firebaseio.com",
    projectId: "socialnite-9d0ef",
    storageBucket: "socialnite-9d0ef.appspot.com",
    messagingSenderId: "1077453204255"
};
firebase.initializeApp(config);


// Called upon clicking the facebook log-in button 
$(".loginBtn--facebook").on("click", function () {
    console.log("facebook login clicked");
    event.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // Redirect to landing page. Will update url when actual url is available
        window.location.replace("https://social-nite.github.io/social-nite/landing.html");
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
    });
});

