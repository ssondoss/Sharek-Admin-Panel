import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-phone-address',
  templateUrl: './edit-phone-address.component.html',
  styleUrls: ['./edit-phone-address.component.css', '../../app.component.css'],
})
export class EditPhoneAddressComponent implements OnInit {
  editPhoneAddressForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editPhoneAddressForm = this.formBuilder.group({
      contactName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(250)]),
      ],
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ]),
      ],
    });
  }
}
