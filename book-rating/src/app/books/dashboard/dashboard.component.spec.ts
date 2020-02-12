import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;

  beforeEach(async(() => {

    book = {
      title: '',
      isbn: '',
      description: '',
      rating: 3,
      price: 0
    };

    const ratingMock = {
      rateUp: () => book
    };


    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        // "liefere ratingMock aus, wenn jemand BookRatingService anfordert"
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service for rateUp()', () => {
    // Arrange
    const service = TestBed.inject(BookRatingService);

    // originalen Call durchleiten, damit Komponente korrekt weiterarbeiten kann
    spyOn(service, 'rateUp').and.callThrough();

    // Act
    component.rateUp(book);

    // Assert
    expect(service.rateUp).toHaveBeenCalled();

  });
});
