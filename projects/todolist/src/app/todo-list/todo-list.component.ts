import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {TODOS} from "../mock-todo"
import '@picocss/pico'
import {BorderHighlightDirective} from "../../../border-highlight.directive";
import {TodoComponent} from "../todo/todo.component";
import {TodoService} from "../services/todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective, TodoComponent],
  templateUrl: 'todo-list.component.html',
  styleUrl: 'todo-list.component.css'
})
export class TodoListComponent {
  todoList: Todo[] = TODOS;

  completedFilter: boolean = false;
  showEverything: boolean = false;

  constructor(private todoservice: TodoService) {
  }

  ngOnInit(): void {
    this.todoservice.getTodoList().subscribe(todos => this.todoList = todos)
    this.todoservice.getTodoById(5).subscribe(todo => console.log(todo))
  }

  onClickTodo(): void {
    this.completedFilter = false
    this.showEverything = false
  }

  onClickTodoCompleted(): void {
    this.completedFilter = true
    this.showEverything = false
  }

  onClickTodoShowEverything(): void {
    this.showEverything = true
  }
}
