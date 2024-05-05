import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AngularFirestore} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {User} from '../../models/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {
  public playing$: Observable<User>;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.playing$ = this.route.params.pipe(
      switchMap(params => this.db.collection('users').doc<User>(params.id).valueChanges()),
    );
  }

}
