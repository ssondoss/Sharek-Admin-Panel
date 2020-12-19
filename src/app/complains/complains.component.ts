import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css', '../app.component.css'],
})
export class ComplainsComponent implements OnInit {
  viewed = false;
  disabledNotes = true;
  disabledSelect = true;
  complains: Observable<any[]>;
  constructor(public firestore: AngularFirestore, private router: Router) {
    this.complains = firestore
      .collection('complaint-and-suggestions')
      .valueChanges();
  }

  viewing(): void {
    this.viewed = true;
  }
  editStatus(): void {
    this.disabledSelect = false;
  }
  confirmStatus(): void {
    this.disabledSelect = true;
  }
  confirmNotes(): void {
    this.disabledNotes = true;
  }
  editAditionalNotes(): void {
    this.disabledNotes = false;
  }

  getDate(date): any {
    return new Date(date);
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('currentSharekAdmin'));
    console.log(user);
    if (user == null || user == undefined || user == {}) {
      this.router.navigate(['/login']);
    }
  }
}
