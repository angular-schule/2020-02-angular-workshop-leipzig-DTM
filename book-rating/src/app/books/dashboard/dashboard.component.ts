import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit(): void {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        price: 36.9,
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Das andere Framework',
        price: 32.9,
        rating: 3
      }
    ];
  }

  rateUp(book: Book) {
    console.log('rateUp', book);
  }

  rateDown(book: Book) {
    console.log('rateDown', book);
  }
}
