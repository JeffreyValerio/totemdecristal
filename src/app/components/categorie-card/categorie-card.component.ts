import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-card',
  templateUrl: './categorie-card.component.html',
  styleUrls: ['./categorie-card.component.css'],
})
export class CategorieCardComponent implements OnInit {
  @Input() categorie: any = {};
  @Output() categorieSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.categorieSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  showCategorie(id: string) {
    // this.router.navigate(['/categorie', id]);
    // console.log(this.categorie.id);
    this.categorieSelected.emit(this.categorie);
  }
}
