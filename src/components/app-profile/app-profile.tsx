import { Component, State } from '@stencil/core';
import firebase from 'firebase';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  @State() currentUser = null;

  componentWillLoad() {
    firebase.auth().onAuthStateChanged(currentUser => {
      if(currentUser) {
        this.currentUser = currentUser;
      } else {
        (document.querySelector('ion-nav') as HTMLIonNavElement).setRoot('app-login');
      }
    })
  }

  render() {
    if (this.currentUser === null) {
      return null;
    }

    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <ion-grid>
          <ion-row>
            <ion-col align-self-center size="auto">
              <ion-avatar>
                <img src={this.currentUser.photoURL}/>
              </ion-avatar>
            </ion-col>
            <ion-col>
              <div>
                <p>Nom : {this.currentUser.displayName}</p>
                <p>Email : {this.currentUser.email}</p>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-button onClick={() => firebase.auth().signOut()}>
          Logout
        </ion-button>
      </ion-content>
    ];
  }
}
