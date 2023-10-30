import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact?: Contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const page = parseInt(this.route.snapshot.params['page'] ?? '1');
    this.getContactbyIdx(page);
  }

  getContactbyIdx(page: number) {
    this.contactsService.getContacts(page).subscribe(
      (contacts) => {
        const idx = this.route.snapshot.params['idx'] ?? '';
        this.contact = contacts.results[idx];
      },
      (error) => {
        alert("Something went wrong, please try again");
      }
    );
  }

}
