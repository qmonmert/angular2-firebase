import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA2n9YUORKUMW2P-2vkhrc6R6X-NkGmaZY",
      authDomain: "popping-fire-9851.firebaseapp.com",
      databaseURL: "https://popping-fire-9851.firebaseio.com",
      storageBucket: "popping-fire-9851.appspot.com",
      messagingSenderId: "923784914853"
    };
    initializeApp(config);

    var root = database().ref('trainings');

    root.on('value', function(snap) {

      console.log(snap.key, snap.val());

    });
  }

}
