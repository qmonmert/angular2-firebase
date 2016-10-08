import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { firebaseConfig } from './../environments/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    initializeApp(firebaseConfig);

    var root = database().ref('trainings');

    root.on('value', function(snap) {

      console.log(snap.key, snap.val());

    });
  }

}
