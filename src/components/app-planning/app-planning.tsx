import { Component } from '@stencil/core';

@Component({
  tag: 'app-planning',
  styleUrl: 'app-planning.css'
})
export class AppPlanning {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Planning</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    ];
  }
}
