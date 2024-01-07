import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TODOS} from "../mock-todo"
import '@picocss/pico'
import {BorderHighlightDirective} from "../../../border-highlight.directive";
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective, TodoComponent],
  templateUrl: 'todo-list.component.html',
  styleUrl: 'todo-list.component.css'
})
export class TodoListComponent{
  todoList = TODOS;

  completedFilter = false;
  showEverything = false;

  onClickTodo(){
    this.completedFilter = false
    this.showEverything = false
  }
  onClickTodoCompleted(){
    this.completedFilter = true
    this.showEverything = false
  }
  onClickTodoShowEverything(){
    this.showEverything = true
  }
}
