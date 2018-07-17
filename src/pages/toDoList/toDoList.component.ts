import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add.component';

@Component({
  selector: 'page-to-do-list',
  templateUrl: 'toDoList.component.html'
})
export class ToDoListPage {

  constructor(public wishesService: WishesService, private navCtrl: NavController, private alertCtrl: AlertController) { }
  
  listSelected(list: List) {
    console.log(list);
  }

  addList() {

    const alert = this.alertCtrl.create({ 
      title: 'New list',
      message: 'Enter name of new list',
      inputs: [{ name: 'titulo', placeholder: 'Enter name of the list' }],
      buttons: [{ text: 'Cancel' }, 
        { text: 'Add', handler: data => { 
          if(data.titulo.length === 0){ 
            return;
          }
          this.navCtrl.push( AddPage, {titulo: data.titulo} );
          //console.log( data.titulo ) 
          }
        }
        ],
    });
    alert.present();
     // this.navCtrl.push(AddPage);

    // console.log('Click');
  }
}
