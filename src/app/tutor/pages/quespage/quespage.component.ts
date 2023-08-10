import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quespage',
  templateUrl: './quespage.component.html',
  styleUrls: ['./quespage.component.css']
})
export class QuespageComponent {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() maxPagesToShow: number = 5;

  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  getPagesToShow(): number[] {
    const pagesToShow: number[] = [];

    // Calculate the start and end page numbers to show based on the current page and maxPagesToShow
    let startPage = Math.max(this.currentPage - Math.floor(this.maxPagesToShow / 2), 1);
    let endPage = startPage + this.maxPagesToShow - 1;

    // Adjust the endPage if it exceeds totalPages
    if (endPage > this.totalPages) {
      endPage = this.totalPages;
      startPage = Math.max(endPage - this.maxPagesToShow + 1, 1);
    }

    // Generate the array of page numbers to show in the pagination bar
    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }

    return pagesToShow;
  }
}
