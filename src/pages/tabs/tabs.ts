import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

import { ToDoListComponent } from '../toDoList/toDoList.component';
import {FinishedIssuesComponent } from '../finishedIssues/finishedIssues.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ToDoListComponent;
  tab2Root = FinishedIssuesComponent;

  constructor() {

  }
}
