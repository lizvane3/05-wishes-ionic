import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List, ListItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {

  list: List;
  itemName: string;
  constructor(public wishesService: WishesService, private navParams: NavParams) { 
    
    const titulo = this.navParams.get('titulo');
    //console.log(this.navParams.get('titulo'));
     this.list = new List(titulo);


  }

  addItem(){
    if(this.itemName.length === 0){
      return;
    }
    // console.log(this.itemName);
    const newItem = new ListItem( this.itemName );
    this.list.items.push( newItem );
    this.itemName = '';
  }
  updateTask(item:ListItem){
    item.finished = !item.finished;
  }
}
   