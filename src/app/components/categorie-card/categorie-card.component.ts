import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categorie-card',
  templateUrl: './categorie-card.component.html',
  styleUrls: ['./categorie-card.component.css'],
})
export class CategorieCardComponent implements OnInit {
  @Input() categorie: any = {};
  @Input() idCategorie: number;
  @Output() categorieSelected: EventEmitter<number>;

  constructor() {
    this.categorieSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  showCategorie() {
    this.categorieSelected.emit(this.idCategorie);
  }
}
