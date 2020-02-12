import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'foo', component: FooComponent },
    { path: 'bar', component: BarComponent }
  ] },
  { path: 'create', component: CreateBookComponent },
  { path: 'search', component: SearchComponent },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    data: {
      name: 'Angular'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
