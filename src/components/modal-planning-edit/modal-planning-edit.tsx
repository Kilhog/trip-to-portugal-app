import { Component, Element } from '@stencil/core';

@Component({
  tag: 'modal-planning-edit',
  styleUrl: 'modal-planning-edit.css'
})
export class ModalPlanningEdit {
  @Element() el: Element;

  dismiss() {
    (this.el.closest('ion-modal') as any).dismiss();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Planning Edit</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
            <ion-button onClick={() => this.dismiss()}>Post</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
      </ion-content>
    ];
  }
}