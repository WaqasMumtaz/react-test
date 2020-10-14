import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8Iw_-EsubmHC1qdmW5cJYSGzd5CXu2mc",
    authDomain: "test-webapp-bf365.firebaseapp.com",
    databaseURL: "https://test-webapp-bf365.firebaseio.com",
    projectId: "test-webapp-bf365",
    storageBucket: "test-webapp-bf365.appspot.com",
    messagingSenderId: "757328460693",
    appId: "1:757328460693:web:4063d232527fafd6fcd49c",
    measurementId: "G-NGTSMXJZX4"
};
const fbData = firebase.initializeApp(config);

export default fbData;