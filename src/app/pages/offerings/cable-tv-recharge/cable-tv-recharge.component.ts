import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cable-tv-recharge',
  templateUrl: './cable-tv-recharge.component.html',
  styleUrls: ['./cable-tv-recharge.component.css']
})
export class CableTVRechargeComponent implements OnInit {

  title: String = "Pay DStv, GOtv and StarTimes Subscription - Instant Activation";
  form!: FormGroup;
  public submitAttempt!: Boolean;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      CableTV: ["", Validators.required],
      Package: ["", Validators.required],
      IUCNumber: ["", Validators.required],
      PhoneNumber: ["", Validators.compose([Validators.required, Validators.minLength(11) ])],
      Amount: ["", Validators.required],
    });
  }

  public send(){
    this.submitAttempt = true;
  }

}
