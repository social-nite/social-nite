console.log("auth.js loaded");

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
const auth = firebase.auth();

const mainPage = "https://social-nite.github.io/social-nite/socialnite.html";
const indexPage = "https://social-nite.github.io/social-nite/index.html";
// const mainPage = "localhost:8080/socialnite.html";
// const indexPage = "localhost:8080/index.html";


// asserts that given email matches the standard email format
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// asserts that given name is only letters, numbers and a spaces and no more than 20 characters in length
function validateName(name) {
    var re = /^[a-zA-Z0-9 ]{1,20}$/;
    return re.test(name);
}

// asserts that the password and passwordConfirm match 
// and that the password is an appropriate length
function validatePassword(password, passwordConfirm) {
    console.log(password.length);
    if (password.length >= 6 && password.length <= 20) {
        if (password === passwordConfirm) {
            return true;
        } else {
            Materialize.toast("Passwords do not match", 3000, 'error');
            return false;
        }
    } else {
        Materialize.toast("Passwords must be between 6 and 20 characters in length", 3000, 'error');
        return false;
    }
}

//removes user from firebase
function removeUserData(userId) {
    firebase.database().ref('users/' + userId).remove()
        .then(function () {
            console.log("Removing user succeeded");
        }, function (error) {
            console.log("Unable to remove user: " + error.message);
            Materialize.toast("Unable to remove user: " + error.message, 3000, 'error');
        });
}

function renderSocialNitesToSideNav() {
    var userRef = firebase.database().ref("users").child(firebase.auth().currentUser.uid).child("socialNites");
    userRef.once("value", function (snapshot) {
        snapshot.forEach(function (data) {
            //get date of social nite
            var socialNiteRef = firebase.database().ref("socialNites").child(data.key);
            socialNiteRef.once("value", function (snap) {
                var socialNiteLi = $("<li>");
                var snlitem = $("<a>");
                snlitem.attr("data-socialniteid", data.key);
                snlitem.addClass("socialnite-list-item");
                snlitem.text(snap.val().city + " on " + moment(snap.val().date).format('MMMM Do'));
                socialNiteLi.html(snlitem);
                $(".hangouts-list").append(socialNiteLi);
            });
        });
    });
}

//logs user in with email and password if they created user via email 
$(".submit-email-login").on("click", function () {
    event.preventDefault();
    var email = $("#email").val().trim();
    var password = $("#pass").val().trim();
    if (validateEmail(email)) {
        var promise = auth.signInWithEmailAndPassword(email, password);
        promise.then(function () {
            $('#modal1').modal('close');
        }, function (e) {
            console.log("Log in failed");
            Materialize.toast(e.message, 3000, 'error');
        });
        console.log(auth.currentUser);
    } else {
        console.log("Invalid email");
        Materialize.toast("Invalid email", 3000, 'error');
    }
});

//called when button to submit new user info is clicked
//validates input data, adds user to firebase auth
//and updates firebase db to have user record
// and redirects to landing page
$(document).on("click", ".overbox>.button>button.active", function (event) {
    console.log("sign up button pressed");
    event.preventDefault();
    var email = $("#regemail").val().trim();
    var name = $("#regname").val().trim();
    var password = $("#regpass").val().trim();
    var passwordConfirm = $("#reregpass").val().trim();
    if (validateEmail(email) && validateName(name)) {
        console.log("email and password valid");
        var promise = auth.createUserWithEmailAndPassword(email, password);
        promise.then(function () {
            var user = auth.currentUser;
            user.updateProfile({
                displayName: name
            }).then(function () {
                console.log("write user data");
                var user = auth.currentUser;
                console.log("uid: " + user.uid);
                firebase.database().ref('users/' + user.uid).set({
                    name: name
                }).then(function () {
                    $('#modal1').modal('close');
                }, function (error) {
                    console.log("Unable to add user: " + error.message);
                    Materialize.toast("Unable to add user", 3000, 'error');
                });
            }, function (error) {
                console.log("Unable to update users display name: " + error.message);
                Materialize.toast("Unable to update users' display name", 3000, 'error');
            });
        }, function (error) {
            console.log("Sign up failed");
            Materialize.toast("Sign up failed", 3000, 'error');
        })
    } else {
        Materialize.toast("Invalid data provided in form", 3000, 'error');
    }
});

// Called upon clicking the facebook log-in button 
// creates new user record in firebase db if it doesn't exist
// redirects to landing page
$(".login-facebook").on("click", function () {
    console.log("facebook login clicked");
    event.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log("attempting to add user data");
        firebase.database().ref('users/' + user.uid).set({
            name: user.displayName
        }).then(function () {
            console.log("Adding user succeeded.");
        }, function (error) {
            console.log("Unable to add user: " + error.message);
            Materialize.toast("Unable to add user: " + error.message, 3000, 'error');
        });
        // Redirect to landing page. Will update url when actual url is available
    }, function (error) {
        console.log("facebook login failed: " + error.message);
        Materialize.toast("facebook login failed: " + error.message, 3000, 'error');
    });
});

//logs user out and redirects to login page
$(document).on("click", ".sign-out", function () {
    event.preventDefault();
    console.log("logging user out");
    auth.signOut();
    window.location.replace(indexPage);
});

auth.onAuthStateChanged(function (currentUserObj) {
    if (currentUserObj) {
        console.log(auth.currentUser.displayName + " is logged in");
        $("#user-side-nav-link").show();
        $("#header-side-nav-link").hide();
        $("#user-name").show();
        renderSocialNitesToSideNav();
        Materialize.toast(auth.currentUser.displayName + " is logged in", 5000);
    } else {
        console.log("Not logged in");
        if (window.location.href.includes(mainPage)) {
            window.location.replace(indexPage);
        }
        $("#user-side-nav-link").hide();
        $("#header-side-nav-link").show();
        $("#user-name").hide()

    }
});
