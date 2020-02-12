import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  constructor(private bs: BookStoreService, private router: Router) { }

  ngOnInit(): void {
  }

  create(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    });
  }

}
