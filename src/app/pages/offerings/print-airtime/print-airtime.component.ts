import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-print-airtime',
  templateUrl: './print-airtime.component.html',
  styleUrls: ['./print-airtime.component.css']
})
export class PrintAirtimeComponent implements OnInit {

  title: String = "Print airtime e-pin";
  form!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      MobileNetwork: [],
      Value: [],
      Quantity: [],
    });
  }

  public send(){}

}
