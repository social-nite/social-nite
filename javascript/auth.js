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

const landingPage = "https://social-nite.github.io/social-nite/landing.html";
const loginPage = "https://social-nite.github.io/social-nite/login.html"

// asserts that given email matches the standard email format
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// asserts that given name is only letters and no more than 20 characters in length
function validateName(name) {
    var re = /^[a-zA-Z]{1,20}$/;
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
            addErrorModal("passwords do ot match");
            return false;
        }
    } else {
        addErrorModal("passwords mus be between 6 and 20 characters in length");
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
            addErrorModal(error.message)
        });
}

//logs user in with email and password if they created user via email 
$(".login").on("click", function () {
    event.preventDefault();
    var email = $("#name").val().trim();
    var password = $("#pass").val().trim();
    if (validateEmail(email)) {
        var promise = auth.signInWithEmailAndPassword(email, password);
        promise.then(function () {
           window.location.replace(landingPage);
        }, function (e) {
            console.log("Log in failed");
            console.log(e.message);
        });
        console.log(auth.currentUser);
    } else {
        console.log("Invalid email");
    }
});

//called when button to submit new user info is clicked
//validates input data, adds user to firebase auth
//and updates firebase db to have user record
// and redirects to landing page
$(document).on("click", ".overbox>button.active", function (event) {
    console.log("sign up button pressed");
    event.preventDefault();
    var email = $("#regname").val().trim();
    // var firstName = $("#txt-first-name-new-user").val().trim();
    // var lastName = $("#txt-last-name-new-user").val().trim();
    var password = $("#regpass").val().trim();
    var passwordConfirm = $("#reregpass").val().trim();
    if (validateEmail(email) && validatePassword(password, passwordConfirm)) {
        //if (validateEmail(email) && validatePassword(password, passwordConfirm) && validateName(firstName) && validateName(lastName)) {
        // var fullName = firstName + " " + lastName;
        console.log("email and password valid");
        var promise = auth.createUserWithEmailAndPassword(email, password);
        promise.then(function () {
            var user = auth.currentUser;
            user.updateProfile({
                // displayName: fullName
            }).then(function () {
                console.log("write user data");
                var user = auth.currentUser;
                console.log("uid: " + user.uid);
                firebase.database().ref('users/' + user.uid).set({
                    name: "test"
                }).then(function () {
                    console.log("Adding user succeeded. Navigating to landing page");
                    window.location.replace(landingPage);
                }, function (error) {
                    console.log("Unable to add user: " + error.message);
                });
            }, function (error) {
                console.log("Unable to update users display name: " + error.message);
            });
        }, function (error) {
            console.log("Sign up failed");
        })
    }
});

// Called upon clicking the facebook log-in button 
// creates new user record in firebase db if it doesn't exist
// redirects to landing page
$(".loginBtn--facebook").on("click", function () {
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
            console.log("Adding user succeeded. Navigating to landing page");
            window.location.replace(landingPage);
        }, function (error) {
            console.log("Unable to add user: " + error.message);
        });
        // Redirect to landing page. Will update url when actual url is available
    }, function (error) {
        console.log("facebook login failed: " + error.message);
    });
});

//logs user out and redirects to login page
$("#btn-log-out").on("click", function () {
    console.log("logging user out");
    auth.signOut();
    window.location.replace(loginPage);
});

auth.onAuthStateChanged(function (currentUserObj) {
    if (currentUserObj) {
        if (window.location.href === loginPage) {
           window.location.replace(landingPage);
        }
    } else {
        console.log("Not logged in");
        if (window.location.href !== loginPage) {
            window.location.replace(loginPage);
        }
    }
});