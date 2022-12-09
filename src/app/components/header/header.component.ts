import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'src/app/providers/auth/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router,
    public auth: AuthProvider,
  ) { }

  ngOnInit(): void {
  }


  public logout(){
  localStorage.clear();
  console.log("Logging Out ........");
  this.route.navigate(["/login"]);
  }

}
