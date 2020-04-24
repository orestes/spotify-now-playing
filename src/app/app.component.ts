import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  public artist$: Subject<string> = new Subject<string>();
  public song$: Subject<string> = new Subject<string>();
  public cover$: Subject<string> = new Subject<string>();

// TODO: Use chrome authentication
  private userId = 'FLGsgG1xgm5d86lLLE8f';
  private sub: Subscription;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.sub = this.db.collection('users').doc<User>(this.userId).valueChanges()
      .subscribe((values) => {
        this.artist$.next(values.artist);
        this.song$.next(values.song);
        this.cover$.next(values.cover);
      });
  }

  ngOnDestroy(): void {
    if (this.sub && !this.sub.closed) {
      this.sub.unsubscribe();
    }
  }

}
