import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  currPage: number = 1;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactsService.getContacts(this.currPage).subscribe(
      (contacts) => {
      this.contacts = contacts.results;
    },
    (error) => {
      alert("Something went wrong, please try again");
    }
    );
  }

  onPageChange(page: number): void {
    this.currPage = page;
    this.getContacts();
  }
}
