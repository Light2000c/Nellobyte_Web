import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from 'src/app/providers/auth/auth';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  public title: string = "Submit a Ticket";
  public form!: FormGroup;
  public submitAttempt: boolean = false;


  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthProvider,
  ) { 
   
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Email: ["", Validators.required],
      Subject: ["", Validators.required],
      Category: ["", Validators.required],
      PhoneNumber: ["", Validators.compose([ Validators.required, Validators.minLength(11) ])],
      TransactionID: ["", Validators.required],
      Date: ["", Validators.required]
    });
  }

  public send(){
    this.submitAttempt = true;
  }

}
