import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  imports: [CommonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {
@Input() categories!:string[];
@Output() onSelectedCategory = new EventEmitter<string>();
selectedCategory:string = "All";
sendSelectedCategory($selectedCategory:string){
  this.selectedCategory = $selectedCategory;
  this.onSelectedCategory.emit($selectedCategory);
}
}
