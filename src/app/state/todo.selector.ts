import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { ToDoState } from './todo.reducer';

// export const selectTodos = (state: AppState) => state.todos;
// export const todoSelector = createSelector(
//     selectTodos, (state: ToDoState) => state.todos
// );

export const todoSelector = createSelector(createFeatureSelector("todos"),
    (state: ToDoState) => state 
);