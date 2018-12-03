import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-planning',
  styleUrl: 'app-planning.css'
})
export class AppPlanning {
  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

  async onClickFab() {
    const modal = await this.modalCtrl.create({
      component: 'modal-planning-edit'
    });
    await modal.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Planning</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button onClick={() => this.onClickFab()}>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    ];
  }
}
