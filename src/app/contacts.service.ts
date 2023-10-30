import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  // GET contacts from the server
  getContacts(pageNum: number): Observable<any> {
    return this.http.get(`${this.contactsUrl}?page=${pageNum}&results=10&seed=nuvalence`);
  }
}
