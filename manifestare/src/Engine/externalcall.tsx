// import { useEffect } from "react";
// import firebase from "firebase/app";
import "firebase/database";

const FirebaseDataComponent = () => {
//   useEffect(() => {
//     // Initialize Firebase with your project's configuration
//     firebase.initializeApp({
//       apiKey: "YOUR_API_KEY",
//       authDomain: "YOUR_AUTH_DOMAIN",
//       databaseURL: "https://manifestare-default-rtdb.europe-west1.firebasedatabase.app",
//       projectId: "YOUR_PROJECT_ID",
//       storageBucket: "YOUR_STORAGE_BUCKET",
//       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//       appId: "YOUR_APP_ID"
//     });

//     // Get a reference to the root of your Firebase Realtime Database
//     const dbRef = firebase.database().ref();

//     // Retrieve the data from the database
//     dbRef.on("value", (snapshot) => {
//       // Log the data to the console
//       console.log(snapshot.val());
//     });

//     // Cleanup the Firebase app when the component unmounts
//     return () => firebase.app().delete();
//   }, []);

//   return null;
};

export default FirebaseDataComponent;