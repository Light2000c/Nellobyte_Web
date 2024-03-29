import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-waec-epin',
  templateUrl: './waec-epin.component.html',
  styleUrls: ['./waec-epin.component.css']
})
export class WaecEpinComponent implements OnInit {

  title: String = "Purchase WAEC e-PIN Instant Activation";
  form!: FormGroup;
  submitAttempt: boolean = false;
  public loading: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ExamType: ["", Validators.required],
      PhoneNumber: ["", Validators.compose([ Validators.required, Validators.minLength(11) ])],
      Amount: ["", Validators.required]
    });
  }

  public send(){
    this.submitAttempt = true;
  }

}
