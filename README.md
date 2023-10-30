# AddressBook

## Start
`npm start`, `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

`npm test` - run tests  
`ng test --code-coverage` - run tests with code coverage


## Approach
ContactsService: this is where the API call is made, which is then used by different components.

ContactsComponent: component to list multiple contacts in table format. Fetches list of contacts from ContactsService. Updates on pageChange. Navigate to details page on click. Used *ngFor to display contacts.

ContactDetailsComponent: page to display more information about a specific contact. Takes page number and index of contact via route.

PaginationComponent: pagination buttons to navigate to previous/next page. Takes current page number as @Input from ContactsComponent. Outputs changedPage EventEmitter with the new page.

## Features
- pagination, can navigate to next/prev page
- responsive design -- change table format for larger screens to grid format on smaller screens, different font sizes
- scale and change color on hover over contact
- unit tests (100% for statements, functions, lines, 85.71% for branches)



## Given more time
Given more time, a few quick implementations would include:
- catch navigating to a non existing route
- adding more CSS features, including animation
- providing more meaningful error messages
- explore more options to pass information between components in routing. This way, I would reduce the amount of calls I am making to the API. 
- adding more accessibility features such as tooltips on hover. 
- write more unit tests to over a wider range of cases.