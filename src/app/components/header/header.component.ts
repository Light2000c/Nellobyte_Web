import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from 'src/app/models/user.model';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { UtilitiesProvider } from 'src/app/providers/utilities/utilities';
import Swal, { SweetAlertIcon } from 'sweetalert2';

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


  public logout() {
    console.log("Logging Out ........");
    this.alert2('success', 'Logging Out', 'Please wait....');;
  }


  public alert2(icon: SweetAlertIcon, title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was logged out by timer')
        localStorage.clear();
        this.route.navigate(["/login"]);
      }
    })
  }

  public navigatePage(){
    this.route.navigate(['/BuyAirtime']);
  }


  public setActiveRoute(){
   return this.route.isActive;
  }

}
