import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { TodoinputComponent } from './component/todoinput/todoinput.component';
import { TodoitemsComponent } from './component/todoitems/todoitems.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoinputComponent,
    TodoitemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
