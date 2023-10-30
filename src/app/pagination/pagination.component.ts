import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currPage: number = 1;
  totalPages: number = 5;
  @Output() changedPage: EventEmitter<number> = new EventEmitter();

  constructor() {}

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currPage = page;
      this.changedPage.emit(page);
    }
  }
}
