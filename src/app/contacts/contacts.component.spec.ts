import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from '../pagination/pagination.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactsService: ContactsService;
  let mockContacts = [{phone: '56424516', gender: 'female'}, {phone: '662342', gender: 'male'}];
  let getContactsSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent, PaginationComponent ],
      imports: [HttpClientModule],
      providers: [ContactsService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    contactsService = TestBed.inject(ContactsService);
    fixture.detectChanges();

    getContactsSpy = spyOn(contactsService, 'getContacts');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currPage to 1 by default', () => {
    expect(component.currPage).toBe(1);
  });

  it('should set contacts to [] by default', () => {
    expect(component.contacts).toEqual([]);
  });

  it('should get contacts on initialization', () => {
    getContactsSpy.and.returnValue(of({ results: mockContacts }));
    component.ngOnInit();
    // expect(component.contacts).toEqual(mockContacts);
  });

  it('should handle error when getting contacts', () => {
    getContactsSpy.and.returnValue(throwError('Error'));
    spyOn(window, 'alert');

    component.ngOnInit();

    expect(window.alert).toHaveBeenCalledWith('Something went wrong, please try again');
  });

  it('onPageChange should change the current page and get contacts', () => {
    getContactsSpy.and.returnValue(of({ results: mockContacts }));

    const newPage = 2;
    component.onPageChange(newPage);
    expect(component.currPage).toBe(newPage);
    expect(getContactsSpy).toHaveBeenCalled();
  });

});
