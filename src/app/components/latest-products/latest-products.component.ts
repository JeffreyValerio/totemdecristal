import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css'],
})
export class LatestProductsComponent implements OnInit {
  products: ProductInterface[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 40,
    dots: false,
    navSpeed: 900,
    autoplay: true,
    navText: [
      '<span class="categorie-nav categorie-left animate__animated animate__fadeInLeft"> <i class="fas fa-chevron-left"></i> </span>',
      '<span class="categorie-nav categorie-right animate__animated animate__fadeInRight"> <i class="fas fa-chevron-right"></i> </span>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
