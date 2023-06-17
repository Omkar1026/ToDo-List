import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, loadTodos, loadTodosFailure, loadTodosSuccess } from './todo.actions';
import { TodoModel } from './todo.model';

//initialize To Do state
export interface ToDoState {
    todos: TodoModel[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

//Set initial state
export const initialState: ToDoState = {
    todos: [],
    error: '',
    status: 'pending'
}

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { content }) => ({
        ...state, todos: [...state.todos, { id: Date.now().toString(), content: content }],
    })),

    on(removeTodo, (state, { id }) => ({
        ...state, todos: state.todos.filter(todo => todo.id !== id),
    })),
);