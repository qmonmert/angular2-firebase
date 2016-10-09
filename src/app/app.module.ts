import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from './../environments/firebase.config';

import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
