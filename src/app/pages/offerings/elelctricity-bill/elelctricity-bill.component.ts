import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-elelctricity-bill',
  templateUrl: './elelctricity-bill.component.html',
  styleUrls: ['./elelctricity-bill.component.css']
})
export class ElelctricityBillComponent implements OnInit {

  title: String = "Electricity Bill";
  form!: FormGroup;
  public submitAttempt!: boolean;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ElectricityCompany: ["", Validators.required],
      MeterType: ["", Validators.required],
      MeterNumber: ["", Validators.required],
      PhoneNumber: ["", Validators.compose([ Validators.required, Validators.minLength(11) ])],
      Amount: ["", Validators.required]
    });
  }

  send(){
    this.submitAttempt = true;
  }

}
