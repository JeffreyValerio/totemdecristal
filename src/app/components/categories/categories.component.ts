import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategorieInterface } from 'src/app/models/categorie';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Output() categorieSelected: EventEmitter<number>;
  categories: CategorieInterface[] = [];
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
        items: 4,
      },
    },
    nav: true,
  };
  constructor(
    private router: Router,
    private categorieService: CategorieService
  ) {
    this.categorieSelected = new EventEmitter();
    this.loading = true;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.listCategories().subscribe(
      (res: CategorieInterface[]) => {
        this.categories = res;
        this.loading = false;
      },
      (err) => console.log(err)
    );
  }

  showCategorie(id: string) {
    this.router.navigate(['/categorie', id]);
  }
}
