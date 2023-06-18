import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { addTodo, removeTodo } from 'src/app/state/todo.actions';
import { TodoModel } from 'src/app/state/todo.model';
import { todoSelector } from 'src/app/state/todo.selector';

@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css']
})
export class TodopageComponent {
  todos$: Observable<TodoModel[]>;
  todoInput = '';
  inputempty!: boolean;

  constructor(private store: Store) {
    this.todos$ = store.select(todoSelector);
  }

  addToDo() {
    if (this.todoInput) {
      this.inputempty = false;
      this.store.dispatch(addTodo({ content: this.todoInput }));
      this.todoInput = '';
    } else {
      this.inputempty = true;
    }
  }

  removeToDo(todo: TodoModel){
    this.store.dispatch(removeTodo({id: todo.id}));
  }
}
