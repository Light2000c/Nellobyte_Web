import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bundle',
  templateUrl: './data-bundle.component.html',
  styleUrls: ['./data-bundle.component.css']
})
export class DataBundleComponent implements OnInit {

  title: String = "Buy Databundle";
  constructor() { }

  ngOnInit(): void {
  }

}
