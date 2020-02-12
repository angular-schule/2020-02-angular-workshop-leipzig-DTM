import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetModule } from '../widget/widget.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    FooComponent,
    BarComponent,
    CreateBookComponent,
    BookFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    WidgetModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
