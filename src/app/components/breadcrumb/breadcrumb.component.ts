import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() categorieId: number;
  @Input() categorieName: string;
  @Input() productName: string;

  constructor() {}

  ngOnInit(): void {}
}
