import '@ionic/core';
import firebase from 'firebase/app';

var config = {
    apiKey: "AIzaSyBPQlzE7X_1-dZSplmuvGEWnL030VKEyP4",
    authDomain: "trip-to-portugal-ff1e7.firebaseapp.com",
    databaseURL: "https://trip-to-portugal-ff1e7.firebaseio.com",
    projectId: "trip-to-portugal-ff1e7",
    storageBucket: "trip-to-portugal-ff1e7.appspot.com",
    messagingSenderId: "1052929005850"
};

console.log(firebase.initializeApp(config));

// import { setupConfig } from '@ionic/core';

// setupConfig({
//   mode: 'ios'
// });
