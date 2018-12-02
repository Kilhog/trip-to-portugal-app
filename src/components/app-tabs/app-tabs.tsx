import { Component } from '@stencil/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css'
})
export class AppTabs {

  render() {
    return (
<ion-tabs>
  <ion-tab tab="tab-planning" component="app-planning"></ion-tab>
  <ion-tab tab="tab-profile" component="app-profile"></ion-tab>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab-planning">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>Planning</ion-label>
      <ion-badge>0</ion-badge>
    </ion-tab-button>
    <ion-tab-button tab="tab-profile">
      <ion-icon name="contacts"></ion-icon>
      <ion-label>Profile</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>    );
  }
}