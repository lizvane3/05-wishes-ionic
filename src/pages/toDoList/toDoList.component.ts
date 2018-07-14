import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'page-to-do-list',
  templateUrl: 'toDoList.component.html'
})
export class ToDoListPage {
  constructor(public wishesService: WishesService) { }
  
}
