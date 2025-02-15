import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ImageGalleryComponent} from "../image-gallery/image-gallery.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ImageGalleryComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products: Item[] = [];

  constructor() {
    this.products.push(
      new Item(1, 'iPhone 16 pro max', 'This is Apple iPhone 16 pro max', 1200, 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 10, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'),
      new Item(2, 'Мышь Logitech G102 Lightsync черный', 'This is Logitech G102 Lightsync', 250, 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium', 9.6, 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'),
      new Item(3, 'Ноутбук Apple MacBook Air 13 2022', 'This is Apple MacBook Air 13 2022', 900, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 8.4, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'),
      new Item(4, 'USB Flash карта Kingston DTXM/64GB', 'This is USB Flash карта Kingston DTXM/64GB', 100, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 5.4, 'https://kaspi.kz/shop/p/kingston-dtxm-64gb-64-gb-105027546/?c=750000000'),
      new Item(5, 'Wi-Fi роутер TP-LINK Archer C64', 'This is Wi-Fi роутер TP-LINK Archer C64', 430, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 9.3, 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c64-102399103/?c=750000000'),
      new Item(6, 'Рюкзак OEM 102011-141217 черный', 'This is Рюкзак OEM 102011-141217 черный', 700, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 10.0, 'https://kaspi.kz/shop/p/rjukzak-oem-102011-141217-chernyi-107354519/?c=750000000'),
      new Item(7, 'Кабель Ugreen RJ-45 - RJ-45 10 м 20164', 'This is Кабель Ugreen RJ-45 - RJ-45 10 м 20164', 300, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 4.4, 'https://kaspi.kz/shop/p/kabel-ugreen-rj-45---rj-45-10-m-20164-103346192/?c=750000000'),
      new Item(8, 'Чернила Elforce 101/103 for EPSON 70 мл многоцветный', 'This is Чернила Elforce 101/103 for EPSON 70 мл многоцветный', 982, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 5.2, 'https://kaspi.kz/shop/p/elforce-101-103-for-epson-70-ml-mnogotsvetnyi-132503889/?c=750000000'),
      new Item(9, 'Планшет Apple iPad 2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый', 'This is Планшет Apple iPad 2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый', 1500, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 7.7, 'https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?c=750000000'),
      new Item(10, 'Ноутбук Apple MacBook Air 13 2022', 'This is Apple MacBook Air 13 2022', 900, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 8.8, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'),
    );
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  }
