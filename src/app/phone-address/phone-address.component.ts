import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-address',
  templateUrl: './phone-address.component.html',
  styleUrls: ['./phone-address.component.css', '../app.component.css'],
})
export class PhoneAddressComponent implements OnInit {
  phoneAddressForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.phoneAddressForm = this.formBuilder.group({
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
