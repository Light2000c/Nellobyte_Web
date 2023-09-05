import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { ENDPOINTS } from 'src/app/providers/data/endpoints';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public endpoints = ENDPOINTS;
  public loginForm!: FormGroup;
  public submitAttempt!: boolean;
  public error!: string;
  public busy!: boolean;
  public inputType: string = "password";

  constructor(private formBuilder: FormBuilder, private auth: AuthProvider) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      PhoneNo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
      ],
      Password: ['', Validators.compose([Validators.required])],
    });
  }

  public async login() {
    this.error = '';
    this.submitAttempt = true;
    if (this.loginForm.valid) {
      this.busy = true;
      console.log(this.loginForm.value);
      const response = await this.auth.signIn(
        this.endpoints.login,
        this.loginForm.value
      );
      if (response?.message) {
        this.busy = false;
        this.error = response.message;
        console.log(response.message);
      }
    }
  }

  public showPassword(){
    this.inputType = "text";
 }

 public hidePassword(){
   this.inputType = "password";
}
}
