import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '',
      title: '',
      description: '',
      price: 0,
      rating: 3
    };

    // muss nach Initialisierung von book ausgeführt werden,
    // damit Daten da sind, wenn CD zum ersten Mal ausgeführt wird
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for doRateUp', () => {
    // Arrange
    let emittedBook: Book;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBeTruthy();
    expect(emittedBook).toBe(component.book);
  });

  it('should call method for button click', () => {
    const rateUpBtn: HTMLButtonElement = fixture.debugElement
      .nativeElement
      .querySelector('[data-tid="rateUpBtn"]');

    spyOn(component, 'doRateUp');

    // Act
    rateUpBtn.click();

    // Assert
    expect(component.doRateUp).toHaveBeenCalled();
  });
});
