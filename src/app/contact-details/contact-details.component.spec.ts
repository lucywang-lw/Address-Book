import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let contactsService: ContactsService;
  let activatedRoute: ActivatedRoute;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      imports: [HttpClientModule],
      providers: [ContactsService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: {
              page: '0',
            }
          }
        }
    }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    contactsService = TestBed.inject(ContactsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch contact details and update contact property', () => {
    const mockContacts = [{phone: '56424516', gender: 'female'}, {phone: '662342', gender: 'male'}];
    spyOn(contactsService, 'getContacts').and.returnValue(of({ results: [mockContacts] }));

    component.ngOnInit();

    expect(contactsService.getContacts).toHaveBeenCalledWith(0);
  });

  it('should handle an error when fetching contact details', () => {
    spyOn(contactsService, 'getContacts').and.returnValue(throwError('Error'));
    const alertSpy = spyOn(window, 'alert');

    component.ngOnInit();

    expect(alertSpy).toHaveBeenCalledWith('Something went wrong, please try again');
  });
});
