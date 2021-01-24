import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../models/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategorieService } from '../../services/categorie.service';
import { CategorieInterface } from 'src/app/models/categorie';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  categories: CategorieInterface[] = [];
  categorieName: string;
  categorieId: string;
  products: ProductInterface[] = [];
  productId: string;
  product: any = {};
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
    private productService: ProductService,
    private categorieService: CategorieService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params.id;
      this.loading = true;
    });
    this.productService.getProduct(this.productId).subscribe((res) => {
      this.product = res;
      this.loading = false;
    });

    this.getCategories();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (res: ProductInterface[]) => {
        this.products = res;
        this.loading = false;
      },
      (err) => console.log(err)
    );
  }

  getCategories() {
    this.categorieService.listCategories().subscribe(
      (res: CategorieInterface[]) => {
        for (const categorie of res) {
          if (categorie.c_id == this.product.p_idCategorie) {
            this.categorieName = categorie.c_name;
            this.categorieId = categorie.c_id;
          }
        }
        this.categories = res;
      },
      (err) => console.log(err)
    );
  }
}
