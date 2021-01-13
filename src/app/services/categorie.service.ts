import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategorieInterface } from '../models/categorie';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private API_URI = 'https://jeffreyvalerio.xyz/api';

  constructor(private http: HttpClient) {}

  listCategories() {
    return this.http.get(`${this.API_URI}/categories`);
  }

  listById(id: string) {
    return this.http.get(`${this.API_URI}/categories/${id}`);
  }

  createCategorie(categorie: CategorieInterface) {
    return this.http.post(`${this.API_URI}/categories`, categorie);
  }

  deleteCategorie(id: string) {
    return this.http.delete(`${this.API_URI}/categories/${id}`);
  }

  updateCategorie(id: string, updatedCategorie: CategorieInterface) {
    return this.http.put(`${this.API_URI}/categories/${id}`, updatedCategorie);
  }
}
