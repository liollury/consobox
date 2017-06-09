import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {User} from 'firebase/app';
import {ConsoboxUser} from '../models/consobox-user.interface';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      db.object(`/users/${user.uid}`).update({uid: user.uid, email: user.email});
    })
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUserDbObject(): Observable<firebase.database.Reference> {
    return <Observable<firebase.database.Reference>> this.user.mergeMap(user => {
      return Observable.of(this.db.database.ref(`/users/${user.uid}`));
    });
  }
}
