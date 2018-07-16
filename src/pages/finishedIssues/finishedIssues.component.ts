import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models';

@Component({
  selector: 'page-finished-issues',
  templateUrl: 'finishedIssues.component.html'
})
export class FinishedIssuesPage {
  constructor(public wishesService: WishesService) { }

  listSelected(list: List) {
    console.log(list);
  }

}
