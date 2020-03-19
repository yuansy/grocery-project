import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCmvsPKy4RyEMpu0GLdnFVd-KmZSOS7E9Q",
    authDomain: "grocery-project-a35dc.firebaseapp.com",
    databaseURL: "https://grocery-project-a35dc.firebaseio.com",
    projectId: "grocery-project-a35dc",
    storageBucket: "grocery-project-a35dc.appspot.com",
    messagingSenderId: "678228557804",
    appId: "1:678228557804:web:4f81406957e8a215d9cac9",
    measurementId: "G-0K4SRSG539"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;