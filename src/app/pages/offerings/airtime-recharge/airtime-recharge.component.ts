import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { DataProvider } from 'src/app/providers/data/data';
import { ENDPOINTS } from 'src/app/providers/data/endpoints';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';

@Component({
  selector: 'app-airtime-recharge',
  templateUrl: './airtime-recharge.component.html',
  styleUrls: ['./airtime-recharge.component.css']
})
export class AirtimeRechargeComponent implements OnInit {

  title: String = "Recharge Airtime";
  public form!: FormGroup;
  public submitAttempt!: boolean;
  public endpoints = ENDPOINTS;
  public loading!: boolean;
  public requestID = '0051';

  public product = {
    name: 'buy_airtime',
    endpoint: this.endpoints.buyairtime,
  };

  constructor(
    private authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    private data: DataProvider,
    private transaction: TransactionProvider,
  ) { }

  ngOnInit(): void {

    this.load();
    this.form = this.formBuilder.group({
      Network: ['', Validators.required],
      MobileNetwork: ['', Validators.required],
      AirtimeValue: ['', Validators.compose([Validators.required, Validators.min(50), Validators.max(50000)])],
      MobileNumber: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11)])],
      Amount: ['', Validators.required],
      RequestID: ['', Validators.required],
    });
    this.form.controls.Network.valueChanges.subscribe((value) => {
      this.setMobileNetwork(value);
      this.setRequestID();
    });

    this.form.controls.AirtimeValue.valueChanges.subscribe((value) => {
      this.setAmount(value);
    });

  }

  public async load() {
    if (!this.transaction.airtimepackagesLoaded) {
      console.log("preparing to load airtime packages....");
      await this.transaction.getAirtimePackages();
    } else {
      console.log("airtime packages is already loaded....");
    }
  }

  public setMobileNetwork(key: any) {
    if (this.form.controls.Network.value) {
      this.form.controls.MobileNetwork.setValue(this.data.airtimePackages[key].id);
    }
  }


  public setAmount(amount: any) {
    if (this.form.controls.MobileNetwork.value) {
      let discount = this.data.airtimePackages[this.form.controls.Network.value].discount;
      console.log(discount);
      let newAmount = amount - (amount * discount / 100);
      this.form.controls.Amount.setValue(newAmount);
    }
  }


  public setRequestID() {
    this.form.controls.RequestID.setValue(this.requestID);
  }

  public reset() {
    this.submitAttempt = false;
    this.form.reset();
    this.loading = false;
  }

  public async send() {
    this.submitAttempt = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.loading = true;
      console.log(this.form.value);
      console.log(this.product);
      if (await this.transaction.pay(this.form.value, this.product)) {
        this.reset();
      }

    }
  }

}
