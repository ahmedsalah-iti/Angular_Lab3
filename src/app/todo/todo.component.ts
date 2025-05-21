import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  currentTodoNameInput!:string;
  getLastId(): number {

    if (Array.isArray(this.todosList) && this.todosList.length > 0) {
      return this.todosList.reduce((acc, cur) => {
        const accId = acc.id || 0;
        const curId = cur.id || 0;

        return curId > accId ? cur : acc
      }).id || 0
    } else {
      return 0;
    }


  }

  getNextId(): number {
    return this.getLastId() + 1;
  }

  // todosList!:todo[];
  todosList:todo[] = [
  ];
  addTodo():void{
    if (!this.currentTodoNameInput){return;}
    if (this.todosList.some(todo => todo.name === this.currentTodoNameInput)) {return;}

    let nextId = this.getNextId();
    let newTodo = {id:nextId,name:this.currentTodoNameInput,status:"pending"}
    this.todosList.push(newTodo);
    this.currentTodoNameInput = "";
  }
  deleteTodo(todoId:number):void{
    this.todosList = this.todosList.filter((todo)=>{
      return todo.id != todoId
    })
  }
  toggleStatus(todoId:number):void{
    this.todosList.map((todo)=>{
      if (todo.id == todoId){
        let newStatus = todo.status == "pending" ? "completed" : "pending";
        todo.status = newStatus;
      }
      return todo;
    })
  }
}

type todo = {
  id: number,
  name: string,
  status: string
}