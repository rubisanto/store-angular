import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent implements OnInit {

  // variables
  cols = 3;
  category: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  // method
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

}
