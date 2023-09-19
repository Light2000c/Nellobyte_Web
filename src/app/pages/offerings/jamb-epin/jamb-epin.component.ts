import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jamb-epin',
  templateUrl: './jamb-epin.component.html',
  styleUrls: ['./jamb-epin.component.css']
})
export class JambEpinComponent implements OnInit {

  title: String = "Purchase JAMB e-PIN Instant Activation";
  form!: FormGroup;
  submitAttempt: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ExamType: ["", Validators.required],
      ProfileID: ["", Validators.required],
      PhoneNo: ["", Validators.compose([Validators.required, Validators.minLength(11)])],
      Amount: ["", Validators.required]
    });
  }

  public send(){
    this.submitAttempt = true;
  }

}
