import { Component } from '@angular/core';
import { TracksComponentComponent } from './tracks-component/tracks-component.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./shared/products/products.component";

@Component({
  selector: 'app-root',
  imports: [ TracksComponentComponent, TodoComponent, CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab3';
  selectedTaskId:number = 3;
  tasks:task[] = [
    {id:1,name:"Task 1 [dropList]",selector:"</app-tracks-component>"},
    {id:2,name:"Task 2 [todoList]",selector:"</app-todo>"},
    {id:3,name:"Day3 Task 1&2 [productList]",selector:"</app-product>"},
  ]
}
type task={
  id:number,
  name:string,  
  selector:string
}
