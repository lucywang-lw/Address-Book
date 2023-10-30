import { TestBed } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ContactsService', () => {
  let service: ContactsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ContactsService]
    });
    service = TestBed.inject(ContactsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request', () => {
    const page = 2;
    const mockContacts = [{phone: '56424516', gender: 'female'}, {phone: '662342', gender: 'male'}]
    
    service.getContacts(2).subscribe((data) => {
      expect(data).toEqual(mockContacts);
    })

    const mockReq = httpTestingController.expectOne(`https://randomuser.me/api/?page=2&results=10&seed=nuvalence`);
    expect(mockReq.request.method).toBe('GET');

    mockReq.flush(mockContacts);
  })
});
