import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `./products-header.components.html` , 
  
})
export class ProductsHeaderComponent implements OnInit {
  // desc as a default value
  sort = 'desc'
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

}
