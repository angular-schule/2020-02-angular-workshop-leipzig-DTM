import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private rs: BookRatingService) { }

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
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
