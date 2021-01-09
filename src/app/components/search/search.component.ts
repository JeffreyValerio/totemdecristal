import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: ProductInterface[] = [];
  productArr: ProductInterface[] = [];
  term: string;
  @Input() product: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this.activatedRoute.params.subscribe((params) => {
      this.term = params['term'];
      this.term = this.term.toLowerCase();
    });

    this.productService.getProducts().subscribe(
      (res: ProductInterface[]) => {
        this.products = res;
        for (let product of this.products) {
          let name = product.p_name.toLowerCase();
          if (name.indexOf(this.term) >= 0) {
            this.productArr.push(product);
          }
        }
      },
      (err) => console.log(err)
    );
    return this.productArr;
  }
}
