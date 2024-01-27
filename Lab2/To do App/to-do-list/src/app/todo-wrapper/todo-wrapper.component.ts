import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})

export class TodoWrapperComponent {
  todoItems: any = [];

  receiveItem(item: any) {
    this.todoItems.push({ name: item, checked: false });
  }

  receiveFromChild(item: any) {
    this.todoItems = this.todoItems.filter((items : any) => items !== item);
  }

}
