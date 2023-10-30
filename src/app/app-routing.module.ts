import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  { path: 'details/:name/:idx/:page', component: ContactDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: ContactsComponent },
 // { path: '**', component: NotFoundComponent } // !!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
