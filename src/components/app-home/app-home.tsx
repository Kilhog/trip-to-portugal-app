import { Component } from '@stencil/core';
import firebase from 'firebase';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  componentWillLoad() {
    firebase.auth().onAuthStateChanged(currentUser => {
      if(!currentUser) {
        (document.querySelector('ion-nav') as HTMLIonNavElement).setRoot('app-login');
      }
    })
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
      
        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
      </ion-content>
    ];
  }
}
