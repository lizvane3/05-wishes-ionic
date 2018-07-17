import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add.component';

@Component({
  selector: 'page-to-do-list',
  templateUrl: 'toDoList.component.html'
})
export class ToDoListPage {
  constructor(public wishesService: WishesService, private navCtrl: NavController) { }
  
  listSelected(list: List) {
    console.log(list);
  }
  addList() {
     this.navCtrl.push(AddPage);
    // console.log('Click');
  }
}
