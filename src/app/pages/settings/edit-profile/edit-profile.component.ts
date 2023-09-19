import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER } from 'src/app/models/user.model';
import { AuthProvider } from 'src/app/providers/auth/auth';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public user!: USER;
  public form!: FormGroup;
  public submitAttempt: boolean = false;

  constructor(
    public auth: AuthProvider,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      CompanyName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailAddress: ['', Validators.required],
      PhoneNumber: ['', Validators.compose([ Validators.required, Validators.minLength(11)])],
      Sex: [''],
      Country: [''],
      State: ['']
    });

   this.auth.setUser();
   this.user = this.auth.user;
  }


  public updateForm(){
    this.form.setValue({
      CompanyName: this.user.companyName,
      FirstName: this.user.firstName,
      LastName: this.user.lastName,
      EmailAddress: this.user.emailAddress,
      PhoneNumber: this.user.phoneNumber, 
    });
  }


  public send(){
    this.submitAttempt = true;
  }

}
