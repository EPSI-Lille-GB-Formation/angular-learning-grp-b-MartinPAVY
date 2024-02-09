import {Component} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Todo} from "../todo";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task: Todo | undefined

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const taskId: string | null = this.route.snapshot.paramMap.get('id')

    if (taskId) {
      this.todoService.getTodoById(+taskId).subscribe(task => this.task = task)
    }

  }

  goToHomePage() {
    this.router.navigate(['']);
  }
}
