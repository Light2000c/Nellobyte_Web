import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from 'src/app/models/user.model';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { UtilitiesProvider } from 'src/app/providers/utilities/utilities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user!: USER;

  constructor(
    private route: Router,
    public auth: AuthProvider,
    public utilities: UtilitiesProvider,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user_info') || '{}');
    console.log('This is the new user => ', this.user);
  }


  public logout(){
  // localStorage.clear();
  // console.log("Logging Out ........");
  // this.route.navigate(["/login"]);
  this.utilities.alert2('success', 'Logging Out', 'Please wait....');
  }

}
