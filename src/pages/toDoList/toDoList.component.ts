import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models';

@Component({
  selector: 'page-to-do-list',
  templateUrl: 'toDoList.component.html'
})
export class ToDoListPage {
  constructor(public wishesService: WishesService) { }
  
  listSelected(list: List) {
    console.log(list);
  }
}
