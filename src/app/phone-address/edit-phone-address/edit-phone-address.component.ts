import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-phone-address',
  templateUrl: './edit-phone-address.component.html',
  styleUrls: ['./edit-phone-address.component.css', '../../app.component.css'],
})
export class EditPhoneAddressComponent implements OnInit {
  editPhoneAddressForm: FormGroup;
  phoneId: string;
  phone: Observable<any>;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  constructor(
    public afs: AngularFirestore,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  update() {
    this.itemDoc.update({
      category: this.editPhoneAddressForm.controls['category'].value,

      phone: this.editPhoneAddressForm.controls['phoneNumber'].value,
      name: this.editPhoneAddressForm.controls['contactName'].value,
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.phoneId = params['id'];
      this.phoneId = this.phoneId.trim();
      this.itemDoc = this.afs.doc<any>('phone-book/' + this.phoneId);
      this.item = this.itemDoc.valueChanges();
      this.item.forEach((x) => console.log(x));
    });
    this.editPhoneAddressForm = this.formBuilder.group({
      category: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(250)]),
      ],
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
