import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {AngularFirestore} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {pluck, switchMap} from 'rxjs/operators';

import {User} from '../../models/user';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.sass']
})
export class NowPlayingComponent implements OnInit {
  public artist$: Observable<string>;
  public song$: Observable<string>;
  public cover$: Observable<string>;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const nowPlaying$ = this.route.params.pipe(
      switchMap((params: Params) => {
        const {userId} = params;
        return this.db.collection('users').doc<User>(userId).valueChanges();
      })
    );

    this.artist$ = nowPlaying$.pipe(pluck('artist'));
    this.cover$ = nowPlaying$.pipe(pluck('cover'));
    this.song$ = nowPlaying$.pipe(pluck('song'));
  }

}
