import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe({
      next: (res) => (this.products = res),
      error: (err) => console.error('Erro ao carregar produtos:', err),
    });
  }
}

