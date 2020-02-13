import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;
  results$: Observable<Book[]>;

  loading = false;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');

    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      filter(term => term.length >= 3 || !term.length),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => term ? this.bs.search(term) : of([])),
      tap(() => this.loading = false),
    );
  }

}
