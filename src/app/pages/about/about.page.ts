import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [IonicModule, CommonModule],
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss'],
})
export class AboutPage {}
