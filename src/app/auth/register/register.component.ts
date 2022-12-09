import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { DataProvider } from 'src/app/providers/data/data';
import { ENDPOINTS } from 'src/app/providers/data/endpoints';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public endpoints = ENDPOINTS;
  public form!: FormGroup;
  public submitAttempt!: boolean;
  public error!: string;
  public busy!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private data: DataProvider,
    private auth: AuthProvider,

  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      'CompanyName': ['', Validators.required],
      'FirstName': ['', Validators.required],
      'LastName': ['', Validators.required],
      'PhoneNo': ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      'Email': ['', Validators.compose([ Validators.required])],
      'Password': ['', Validators.compose([Validators.required ,Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),])],
    });


    // this.form.addValidators(
    //   this.compareValidator(this.form.controls.Password.value, this.form.controls.confirmPassword.value)
    // );

  }

  compareValidator(password: AbstractControl, confirmPassword: AbstractControl){
   
   return ()=>{
   
    if(password !== confirmPassword){
     return {password_error: 'Password doesn\'t match'};
    }

    return null;
  }
   
  }

  public async send(){
    this.error = '';
    this.submitAttempt = true;
    if(this.form.valid){
      this.busy = true;
      console.log(this.form.value);
    const response = await this.auth.signUp(this.endpoints.register, this.form.value);
     if (response?.message){
      this.busy = false;
      this.error = response.message;
       console.log(response.message);
     }
    }
  }

}
