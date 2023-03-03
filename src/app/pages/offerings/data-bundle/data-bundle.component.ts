import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataProvider } from 'src/app/providers/data/data';
import { ENDPOINTS } from 'src/app/providers/data/endpoints';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';
import { UtilitiesProvider } from 'src/app/providers/utilities/utilities';


@Component({
  selector: 'app-data-bundle',
  templateUrl: './data-bundle.component.html',
  styleUrls: ['./data-bundle.component.css']
})
export class DataBundleComponent implements OnInit {

  title: String = "Buy Databundle";
  public form!: FormGroup;
  public submitAttempt!: boolean;
  public databundles!: any[];
  public databundleTypes!: any[];
  public endpoints = ENDPOINTS;
  public loading!: boolean;
  public generatedID: any;

  public product = {
    name: 'buy_databundle',
    endpoint: this.endpoints.buydatabundle,
  };

  constructor(
    private formBuilder: FormBuilder,
    private transaction: TransactionProvider,
    private data: DataProvider,
    private utilities: UtilitiesProvider,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.load();

    this.form = this.formBuilder.group({
      Network: ['', Validators.required],
      MobileNetwork: ['', Validators.required],
      ProductID: ['', Validators.required],
      MobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      RequestID: ['', Validators.required],
      DataPlan: ['', Validators.required],
      Amount: ['', Validators.required],
    });

    this.form.controls.Network.valueChanges.subscribe((value) => {
      this.setDataBundlePackages(value);
      this.setMobileNetwork(value)
    });

    this.form.controls.DataPlan.valueChanges.subscribe((value) => {
      this.showAmount(value);
      this.setProductID(value)
    });

  }

  public async load() {
    if (!this.transaction.databundlesLoaded) {
      console.log("preparing to load data packages....");
      await this.transaction.getDatabundlePackages();
    } else {
      console.log("data packages is already loaded....");
    }
  }

  public setDataBundlePackages(key: any) {
    if (this.form.controls.Network.value) {
      this.databundles = this.data.databundles[key].data;
      console.log(this.databundles);
      let new_data = [];
      for (let plans of this.databundles) {
        new_data[plans.dataPlan] = {
          id: plans.id,
          dataPlan: plans.dataPlan,
          validity: plans.validity,
          value: plans.value,
        }
        this.databundleTypes = new_data;
      }
      console.log("This is new data", this.databundleTypes);
    }
  }


  public setProductID(key: any) {
    if (this.form.controls.Network.value) {
      this.form.controls.ProductID.setValue(this.databundleTypes[key].id);
    }
  }

  public setMobileNetwork(key: any) {
    if (this.form.controls.Network.value) {
      this.form.controls.MobileNetwork.setValue(this.data.databundles[key].id);
    }
  }


  public setNetworkValue(key: any) {
    return this.data.databundles[key].id;
  }


  public showAmount(key: any) {
    if (this.form.controls.Network.value) {
      this.form.controls.Amount.setValue(this.databundleTypes[key].value);
      console.log("I just set amount ", this.databundleTypes[key].value);
    }
  }

  generateRequestId(){

    const date = new Date();
    let time = date.getTime();
    let new_date = date.toLocaleDateString().replaceAll("/", '');
    let requestID = new_date + time;
    this.generatedID = requestID;

    console.log("New request ID ->>>", requestID);
    this.form.controls.RequestID.setValue(requestID);
  }

  public reset() {
    this.submitAttempt = false;
    this.form.reset();
    this.loading = false;
  }

  public async send() {

    this.generateRequestId();
    
    this.submitAttempt = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.loading = true;
      console.log(this.form.value);
      console.log(this.product);
      if (await this.transaction.pay(this.form.value, this.product)) {
        this.reset();
        this.transaction.updateWalletBalance();
        this.viewDetails()
      }
    }
  }

  public viewDetails(){
    return  this.route.navigate(['/Transaction', this.generatedID]);
    }

}
