import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductInterface } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent implements OnInit {
  idCategorie: string;
  products: ProductInterface[] = [];
  loading: boolean;

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
        items: 3,
      },
    },
    nav: true,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.loading = true;
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this.activatedRoute.params.subscribe((params) => {
      this.idCategorie = params.id;
      console.log(this.idCategorie);
    });

    this.productService.getProducts().subscribe((res: ProductInterface[]) => {
      for (const product of res) {
        if (this.idCategorie === product.p_idCategorie) {
          this.products.push(product);
          console.log(this.products);
          this.loading = false;
        }
      }
    });
  }
}
