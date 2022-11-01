import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public submitAttempt!: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      PhoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      Password: ['', Validators.compose([Validators.required])],
    });
  }


  login(){
    this.submitAttempt = true;

  if(this.loginForm.valid){
console.log(this.loginForm.value);
  }

  }

}
