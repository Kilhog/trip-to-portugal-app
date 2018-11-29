import { Component } from '@stencil/core';
import firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css'
})
export class AppLogin {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <ion-button onClick={() => {
          console.log(" click ");
          var provider = new firebase.auth.FacebookAuthProvider();
          provider.addScope('email');
          firebase.auth().languageCode = 'fr_FR';
          provider.setCustomParameters({
            'display': 'popup'
          });
          console.log(" signInWithPopup ");

          firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(' -- GOOD ');
            console.log(result);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            // ...
          }).catch(function(error) {
            console.log(' -- ERROR ');
            console.log(error);

            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });

        }} expand="block">Facebook</ion-button>
      </ion-content>
    ];
  }
}
