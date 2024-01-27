import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})

export class TodoFormComponent {
  @Output() sendItem = new EventEmitter<string>();

  addItem(item: string) {
    this.sendItem.emit(item);
  }
}
