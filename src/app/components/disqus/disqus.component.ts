import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.css'],
})
export class DisqusComponent implements OnInit {
  pageId = '/comment';
  url = 'https://totemdecristal.com';
  title = 'totemdecristal';
  constructor() {}

  ngOnInit(): void {}
}
