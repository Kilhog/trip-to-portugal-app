import { Component } from '@stencil/core';

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
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
      </ion-content>
    ];
  }
}
