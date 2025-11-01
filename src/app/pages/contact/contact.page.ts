import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  imports: [IonicModule, CommonModule, HeaderComponent],
})
export class ContactPage {}
