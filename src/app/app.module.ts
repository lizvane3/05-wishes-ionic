import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Components
import { ToDoListPage } from '../pages/toDoList/toDoList.component';
import { FinishedIssuesPage } from '../pages/finishedIssues/finishedIssues.component';
import { AddPage } from '../pages/add/add.component';

// Services
import { WishesService } from '../services/wishes.service';

@NgModule({
  declarations: [
    MyApp,
    ToDoListPage,
    FinishedIssuesPage,
    AddPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToDoListPage,
    FinishedIssuesPage,
    AddPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
