import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {AngularFirestore} from '@angular/fire/firestore';

// Rx
import {Observable, of} from 'rxjs';
import {map, pluck, switchMap} from 'rxjs/operators';

import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent { }
