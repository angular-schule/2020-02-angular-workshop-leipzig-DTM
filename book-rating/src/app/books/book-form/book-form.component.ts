import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    this.submitBook.emit();
  }

}
