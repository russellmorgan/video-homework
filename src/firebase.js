import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCC3lPDW7vUSYQS-VyfIcspdjO1mRDJ7Ao",
  authDomain: "particle3-video.firebaseapp.com",
  databaseURL: "https://particle3-video.firebaseio.com",
  projectId: "particle3-video",
  storageBucket: "",
  messagingSenderId: "427453635605",
  appId: "1:427453635605:web:d545cc94ccf4bbd1"
};

firebase.initializeApp(firebaseConfig);

const videoDatabase = firebase.database();