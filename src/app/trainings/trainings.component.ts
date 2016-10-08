import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2/index';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {

  trainings: FirebaseListObservable<any>;

  constructor(private af: AngularFire) { 

    this.trainings = af.database.list('trainings');

    this.trainings.subscribe(
      val => console.log(val)
    );

  }

}
