import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `./products-header.components.html` , 
  
})
export class ProductsHeaderComponent implements OnInit {

  //send the data outside the component
  @Output() columnsCountChange = new EventEmitter<number>();
  
  // desc as a default value
  sort = 'desc'
  itemsShowCount = 12

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  // function to update the value 
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  //update the layout

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
