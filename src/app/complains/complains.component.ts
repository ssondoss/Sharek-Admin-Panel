import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css', '../app.component.css'],
})
export class ComplainsComponent implements OnInit {
  viewed = false;
  viewing(): void {
    this.viewed = true;
  }
  disabledNotes = true;
  disabledSelect = true;
  editStatus() {
    this.disabledSelect = false;
  }
  confirmStatus() {
    this.disabledSelect = true;
  }
  confirmNotes() {
    this.disabledNotes = true;
  }
  editAditionalNotes() {
    this.disabledNotes = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
