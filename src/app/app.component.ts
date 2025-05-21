import { Component } from '@angular/core';
import { TracksComponentComponent } from './tracks-component/tracks-component.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductComponent,TracksComponentComponent,TodoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
  selectedTaskId:number = 1;
  tasks:task[] = [
    {id:1,name:"Task 1 [dropList]",selector:"</app-tracks-component>"},
    {id:2,name:"Task 2 [todoList]",selector:"</app-todo>"},
    {id:3,name:"Task 3 [productList]",selector:"</app-product>"},
  ]
}
type task={
  id:number,
  name:string,  
  selector:string
}
