import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-imput-add-itens',
  templateUrl: './todo-imput-add-itens.component.html',
  styleUrls: ['./todo-imput-add-itens.component.scss']
})
export class TodoImputAddItensComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  public submitItemTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = ""
    }
  }

  constructor() { }



}
