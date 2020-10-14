const { default: firebase } = require("../src/Config/Firebase");

// <!-- The core Firebase JS SDK is always required and must be listed first -->
 importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js")

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
//  importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-analytics.js")
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js")

firebase.initializeApp({
    messagingSenderId: "757328460693"
});

const initMessaging = firebase.messaging();