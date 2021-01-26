import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductInterface } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css'],
})
export class SimilarProductsComponent implements OnInit {
  @Input() idCategorie: string;
  @Input() productId: string;
  products: ProductInterface[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
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

  constructor(private productService: ProductService, private router: Router) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this.productService.getProducts().subscribe(
      (res: ProductInterface[]) => {
        for (const product of res) {
          if (
            this.idCategorie == product.p_idCategorie &&
            product.id != this.productId
          )
            this.products.push(product);
        }
      },
      (err) => console.log(err)
    );
  }

  showProduct(idProduct: number) {
    this.getProducts();
    this.router.navigate(['/product', idProduct]);
  }
}
