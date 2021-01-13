import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-card',
  templateUrl: './categorie-card.component.html',
  styleUrls: ['./categorie-card.component.css'],
})
export class CategorieCardComponent implements OnInit {
  @Input() categorie: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showCategorie(id: string) {
    // this.router.navigate(['/categorie', id]);
    console.log(this.categorie.id);
  }
}
