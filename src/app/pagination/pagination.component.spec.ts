import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currPage to 1 by default', () => {
    expect(component.currPage).toBe(1);
  });

  it('should not emit changedPage event when changePage is called with a page number too small', () => {
    const page = 0;
    let emitEvent: number | undefined;
    component.changedPage.subscribe((emitted) => (emitEvent = emitted));
    component.changePage(page);
    expect(emitEvent).toBeUndefined();
  });

  it('should not emit changedPage event when changePage is called with a page number too big', () => {
    component.totalPages = 5;
    const page = 6;
    let emitEvent: number | undefined;
    component.changedPage.subscribe((emitted) => (emitEvent = emitted));
    component.changePage(page);
    expect(emitEvent).toBeUndefined();
  });

  it('should emit changedPage event when changePage is called with a valid page number', () => {
    const page = 3;
    let emitEvent: number | undefined;
    component.changedPage.subscribe((emitted) => (emitEvent = emitted));
    component.changePage(page);
    expect(emitEvent).toBe(page);
  });

});
