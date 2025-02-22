import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ImageGalleryComponent} from "../image-gallery/image-gallery.component";
import {ProductCategoryComponent} from "../product-category/product-category.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from '../app.component';

@NgModule({
  // bootstrap: [AppComponent],
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppComponent,
    // Add FormsModule to imports array
  ],
  providers: []
})


export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ImageGalleryComponent,
    ProductCategoryComponent,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products_phones: Item[] = [];
  products_laptops: Item[] = [];
  products_earphones: Item[] = [];
  products_desktops: Item[] = [];
  products: Item[] = [];
  categories: string[] = ["Phones", "Laptops", "Earphones", "Desktops"];

  // isChecked: Boolean = false;
  categoryVisibility: { [key: string]: boolean } = {}; // Explicitly declare type

  constructor() {
    this.products.push(
        new Item(0, "phones", 1, 'iPhone 15', 'This is Apple iPhone 15', 1200, 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=preview-large', 10, 'ссылка'),
        new Item(0, "phones", 2, 'Samsung Galaxy S23', 'Samsung flagship phone', 1100, 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large', 9, 'ссылка'),
        new Item(0, "phones", 3, 'Google Pixel 7', 'Google smartphone with AI features', 950, 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hd7/86895780560926.jpg?format=preview-large', 8, 'ссылка'),
        new Item(0, "phones", 4, 'OnePlus 11', 'Fast and smooth OnePlus phone', 900, 'https://resources.cdn-kaspi.kz/img/m/p/p83/p98/24035715.jpg?format=preview-large', 8.5, 'ссылка'),
        new Item(0, "phones", 5, 'Xiaomi 13', 'High-performance Xiaomi phone', 850, 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large', 8.2, 'ссылка'),
        
        new Item(0, "laptops", 6, 'MacBook Pro 14', 'Powerful Apple laptop', 2200, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=preview-large', 9.5, 'ссылка'),
        new Item(0, "laptops", 7, 'Dell XPS 15', 'High-end Dell laptop', 2000, 'https://resources.cdn-kaspi.kz/img/m/p/p74/pb3/23963921.jpg?format=preview-large', 9, 'ссылка'),
        new Item(0, "laptops", 8, 'Asus ROG Strix', 'Gaming laptop by Asus', 1800, 'https://resources.cdn-kaspi.kz/img/m/p/he4/hfc/85373324623902.png?format=preview-large', 8.8, 'ссылка'),
        new Item(0, "laptops", 9, 'HP Spectre x360', 'Convertible HP laptop', 1600, 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=preview-large', 8.7, 'ссылка'),
        new Item(0, "laptops", 10, 'Lenovo Legion 5', 'Affordable gaming laptop', 1400, 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=preview-large', 8.5, 'ссылка'),
      
        new Item(0, "earphones", 11, 'AirPods Pro', 'Noise-canceling wireless earphones', 250, 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large', 9.2, 'ссылка'),
        new Item(0, "earphones", 12, 'Sony WF-1000XM4', 'High-end Sony earphones', 280, 'https://resources.cdn-kaspi.kz/img/m/p/ha4/hc1/83155233407006.jpg?format=preview-large', 9.0, 'ссылка'),
        new Item(0, "earphones", 13, 'Samsung Galaxy Buds2', 'Samsung wireless earbuds', 150, 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h07/64155512635422.jpg?format=preview-large', 8.7, 'ссылка'),
        new Item(0, "earphones", 14, 'JBL Tune 230NC', 'JBL budget earphones', 100, 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=preview-large', 8.0, 'ссылка'),
        new Item(0, "earphones", 15, 'Bose QuietComfort', 'Bose premium noise-canceling earphones', 299, 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=preview-large', 9.3, 'ссылка'),
      
        new Item(0, "desktops", 16, 'iMac 24', 'Apple all-in-one desktop', 1800, 'https://resources.cdn-kaspi.kz/img/m/p/he7/h86/84571503329310.jpg?format=preview-large', 9.4, 'ссылка'),
        new Item(0, "desktops", 17, 'Dell XPS Desktop', 'Dell premium desktop', 1500, 'https://resources.cdn-kaspi.kz/img/m/p/paf/p90/26151125.jpg?format=preview-large', 9.0, 'ссылка'),
        new Item(0, "desktops", 18, 'HP Omen 30L', 'Gaming desktop by HP', 1700, 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h03/86535170195486.png?format=preview-large', 8.8, 'ссылка'),
        new Item(0, "desktops", 19, 'Lenovo Legion Tower 5', 'Lenovo gaming desktop', 1600, 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc9/86158174224414.jpg?format=preview-large', 8.5, 'ссылка'),
        new Item(0, "desktops", 20, 'ASUS ROG Strix G10', 'Asus gaming desktop', 1400, 'https://resources.cdn-kaspi.kz/img/m/p/h6c/hc2/85569053917214.png?format=preview-large', 8.7, 'ссылка')
      
      )

    this.products_phones.push(
      new Item(0, "phones", 1, 'iPhone 15', 'This is Apple iPhone 15', 1200, 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=preview-large', 10, 'ссылка'),
        new Item(0, "phones", 2, 'Samsung Galaxy S23', 'Samsung flagship phone', 1100, 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large', 9, 'ссылка'),
        new Item(0, "phones", 3, 'Google Pixel 7', 'Google smartphone with AI features', 950, 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hd7/86895780560926.jpg?format=preview-large', 8, 'ссылка'),
        new Item(0, "phones", 4, 'OnePlus 11', 'Fast and smooth OnePlus phone', 900, 'https://resources.cdn-kaspi.kz/img/m/p/p83/p98/24035715.jpg?format=preview-large', 8.5, 'ссылка'),
        new Item(0, "phones", 5, 'Xiaomi 13', 'High-performance Xiaomi phone', 850, 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large', 8.2, 'ссылка'),
        )
    this.products_laptops.push(
      new Item(0, "laptops", 6, 'MacBook Pro 14', 'Powerful Apple laptop', 2200, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=preview-large', 9.5, 'ссылка'),
        new Item(0, "laptops", 7, 'Dell XPS 15', 'High-end Dell laptop', 2000, 'https://resources.cdn-kaspi.kz/img/m/p/p74/pb3/23963921.jpg?format=preview-large', 9, 'ссылка'),
        new Item(0, "laptops", 8, 'Asus ROG Strix', 'Gaming laptop by Asus', 1800, 'https://resources.cdn-kaspi.kz/img/m/p/he4/hfc/85373324623902.png?format=preview-large', 8.8, 'ссылка'),
        new Item(0, "laptops", 9, 'HP Spectre x360', 'Convertible HP laptop', 1600, 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=preview-large', 8.7, 'ссылка'),
        new Item(0, "laptops", 10, 'Lenovo Legion 5', 'Affordable gaming laptop', 1400, 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=preview-large', 8.5, 'ссылка'),
      )
    this.products_earphones.push(
      new Item(0, "earphones", 11, 'AirPods Pro', 'Noise-canceling wireless earphones', 250, 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large', 9.2, 'ссылка'),
      new Item(0, "earphones", 12, 'Sony WF-1000XM4', 'High-end Sony earphones', 280, 'https://resources.cdn-kaspi.kz/img/m/p/ha4/hc1/83155233407006.jpg?format=preview-large', 9.0, 'ссылка'),
      new Item(0, "earphones", 13, 'Samsung Galaxy Buds2', 'Samsung wireless earbuds', 150, 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h07/64155512635422.jpg?format=preview-large', 8.7, 'ссылка'),
      new Item(0, "earphones", 14, 'JBL Tune 230NC', 'JBL budget earphones', 100, 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=preview-large', 8.0, 'ссылка'),
      new Item(0, "earphones", 15, 'Bose QuietComfort', 'Bose premium noise-canceling earphones', 299, 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=preview-large', 9.3, 'ссылка'),
    )
    this.products_desktops.push(
      new Item(0, "desktops", 16, 'iMac 24', 'Apple all-in-one desktop', 1800, 'https://resources.cdn-kaspi.kz/img/m/p/he7/h86/84571503329310.jpg?format=preview-large', 9.4, 'ссылка'),
      new Item(0, "desktops", 17, 'Dell XPS Desktop', 'Dell premium desktop', 1500, 'https://resources.cdn-kaspi.kz/img/m/p/paf/p90/26151125.jpg?format=preview-large', 9.0, 'ссылка'),
      new Item(0, "desktops", 18, 'HP Omen 30L', 'Gaming desktop by HP', 1700, 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h03/86535170195486.png?format=preview-large', 8.8, 'ссылка'),
      new Item(0, "desktops", 19, 'Lenovo Legion Tower 5', 'Lenovo gaming desktop', 1600, 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc9/86158174224414.jpg?format=preview-large', 8.5, 'ссылка'),
      new Item(0, "desktops", 20, 'ASUS ROG Strix G10', 'Asus gaming desktop', 1400, 'https://resources.cdn-kaspi.kz/img/m/p/h6c/hc2/85569053917214.png?format=preview-large', 8.7, 'ссылка')
    );
    this.categories.forEach(category => {
      this.categoryVisibility[category] = false;
    });
  }

  getProductsForCategory(category: string): Item[] {
    switch (category) {
      case "Phones":
        return this.products_phones;
      case "Laptops":
        return this.products_laptops;
      case "Earphones":
        return this.products_earphones;
      case "Desktops":
        return this.products_desktops;
      default:
        return [];
    }
  }

  incrementLike(products: Item): void {
    products.likes++;
    console.log("pressed");
  }

  removeProduct(category: String, productId: number): void {
    if (category === "phones") {
      this.products_phones = this.products_phones.filter(product => product.id !== productId);
    } else if (category === "laptops") {
      this.products_laptops = this.products_laptops.filter(product => product.id !== productId);
    } else if (category === "earphones") {
      this.products_earphones = this.products_earphones.filter(product => product.id !== productId);
    } else if (category === "desktops") {
      this.products_desktops = this.products_desktops.filter(product => product.id !== productId);
    }
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  }
