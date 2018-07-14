import { Component } from '@angular/core';

import { ToDoListPage } from '../toDoList/toDoList.component';
import {FinishedIssuesPage } from '../finishedIssues/finishedIssues.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ToDoListPage;
  tab2Root = FinishedIssuesPage;

  constructor() {

  }
}
