import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {TranslateService} from '@ngx-translate/core';
import {languages} from '../translate/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,
              translate: TranslateService) {
    this.user = afAuth.authState;

    for (const language in languages) {
      if (languages.hasOwnProperty(language)) {
        translate.setTranslation(language, languages[language]);
      }
    }

    translate.setDefaultLang('fr-FR');
    translate.use('fr-FR');
  }

  ngOnInit() {
    if (!this.user) {
      this.login();
    }
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
