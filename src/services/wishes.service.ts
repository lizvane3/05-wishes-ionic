import { Injectable } from "@angular/core";
import { List } from '../models';

@Injectable()
export class WishesService {

    lists: List[] = [];
    constructor() {
        const list1 = new List('Collect infinity stones');
        const list2 = new List('Heroes to beat');

        this.lists.push(list1, list2);

        console.log(this.lists);

        console.log("Wishes service started");
    }
}