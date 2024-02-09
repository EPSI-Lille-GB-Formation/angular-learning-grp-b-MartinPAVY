import {Component, Input} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {BorderHighlightDirective} from "../../../border-highlight.directive";
import {Todo} from "../todo";
import {TodoService} from "../services/todo.service";
import {Router} from '@angular/router';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [
    CommonModule, BorderHighlightDirective, NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input("value")
  todo: Todo | undefined;

  constructor(
    private todoservice: TodoService,
    private router: Router
  ) {
  }

  goToTaskDetails(taskId: any) {
    this.router.navigate(['/task', taskId])
  }

  onClickDelete(): void {
    if (this.todo && this.todo.id) {
      this.todoservice.deleteTodoById(this.todo?.id).subscribe(
        () => {
          console.log('Deleted successfully')
        },
        error => {
          console.error('Error deleting todo', error)
        }
      );
    } else {
      alert('Une erreur est survenue')
      console.log('Unknown todo')
    }
  }
}
