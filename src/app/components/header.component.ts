// src/app/components/header.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [IonicModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Fake Store</ion-title>
        <ion-buttons slot="end">
          <ion-button routerLink="/products">Produtos</ion-button>
          <ion-button routerLink="/contact">Contato</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `
})
export class HeaderComponent {}
