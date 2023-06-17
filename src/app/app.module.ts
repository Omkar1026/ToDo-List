import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodopageComponent } from './component/todopage/todopage.component';

@NgModule({
  declarations: [
    AppComponent,
    TodopageComponent
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
