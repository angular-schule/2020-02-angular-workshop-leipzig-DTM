import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';
import { of } from 'rxjs';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {

    // WIP: HTTP-Mock bauen
    const httpMock = {
      get: () => of([])
    };

    TestBed.configureTestingModule({});
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
