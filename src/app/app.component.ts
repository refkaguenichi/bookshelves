import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor(){
    const firebaseConfig = {
      apiKey: 'AIzaSyBlKDAPeeCBi3EwO0pEf0G1X7NTFHW4hRQ',
      authDomain: 'bookshelves-c8dff.firebaseapp.com',
      projectId: 'bookshelves-c8dff',
      storageBucket: 'bookshelves-c8dff.appspot.com',
      messagingSenderId: '743215954455',
      appId: '1:743215954455:web:9a7c5f77355b4da0de3a52',
      measurementId: 'G-5S37MM347W',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
