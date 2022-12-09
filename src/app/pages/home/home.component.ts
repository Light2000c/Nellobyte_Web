import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from 'src/app/models/user.model';
import { AuthProvider } from 'src/app/providers/auth/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideOptions: any = {
    slidesPerView: 2,
    autoplay: true,
    loop: true,
    breakpoints: {
      640:{
        slidesPerView: 1.4,
      },
      900:{
        slidesPerView: 4,
      }
    },
    coverflowEffect: {
      slideShows: true,
    }
  };


  public user!: USER;

  constructor(
    private route: Router,
    public auth: AuthProvider,
  ) { 

  }

  ngOnInit(): void {
  
   this.auth.checkUser();
  }


}
