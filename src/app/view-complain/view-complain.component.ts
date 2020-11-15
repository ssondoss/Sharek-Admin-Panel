import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-complain',
  templateUrl: './view-complain.component.html',
  styleUrls: ['./view-complain.component.css', '../app.component.css'],
})
export class ViewComplainComponent implements OnInit {
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
