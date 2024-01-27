import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() listItem: any;
  @Output() sendToParent = new EventEmitter<string>();

  deleteItem(item: string) {
    this.sendToParent.emit(item);
  }

  toggleChecked(item: any) {
    item.checked = !item.checked;
  }
}
