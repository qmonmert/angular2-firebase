import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private af: AngularFire) {

    const trainings$ : FirebaseListObservable<any> = af.database.list('trainings');

    trainings$.subscribe(
      val => console.log(val)
    )

  }

}
