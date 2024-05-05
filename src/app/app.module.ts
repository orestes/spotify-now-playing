import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

import {environment} from '../environments/environment';
import {RouterModule, Routes} from "@angular/router";
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: ViewComponent,
  }
];

import { NowPlayingComponent } from './components/now-playing/now-playing.component';

const routes: Routes = [
  {
    path: 'view/:userId',
    component: NowPlayingComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NowPlayingComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
