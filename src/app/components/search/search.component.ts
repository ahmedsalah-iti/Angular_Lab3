import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
@Output() onSearchKeyword = new EventEmitter<string>();
searchedKeyword: string = '';
sendSearchKeyword(searchedKeyWord:string){
  this.searchedKeyword = searchedKeyWord;
  this.onSearchKeyword.emit(this.searchedKeyword);
}
}
