import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todo.model';

export const addTodo = createAction('[Todo Page] Add Todo', props<{ content: string }>());

export const removeTodo = createAction('[Todo Page] Remove Todo', props<{ id: string }>());

export const loadTodos = createAction('[Todo Page] Load Todos');

export const loadTodosSuccess = createAction('[Todo API] Todo Load Success', props<{ todos: TodoModel[] }>());

export const loadTodosFailure = createAction('[Todo API] Todo Load Failure', props<{ error: string }>());