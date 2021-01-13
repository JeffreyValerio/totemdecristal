import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URI = 'https://jeffreyvalerio.xyz/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.API_URI}/products`);
  }

  getProduct(id: string) {
    return this.http.get(`${this.API_URI}/products/${id}`);
  }

  createProduct(product: ProductInterface) {
    return this.http.post(`${this.API_URI}/products`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  updateProduct(id: string, updatedProduct: ProductInterface) {
    return this.http.put(`${this.API_URI}/products/${id}`, updatedProduct);
  }
}
