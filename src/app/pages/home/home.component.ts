import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }



}
