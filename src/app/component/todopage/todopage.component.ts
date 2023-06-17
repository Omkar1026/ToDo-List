import { Component } from '@angular/core';

@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css']
})
export class TodopageComponent {
  todo = '';

  addToDo(){
    console.log(this.todo);
  }
}
