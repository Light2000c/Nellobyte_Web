import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { USER } from 'src/app/models/user.model';
import { AuthProvider } from 'src/app/providers/auth/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'nellobyte';
  routerSubscription: any;

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
    public zone: NgZone
  ) { 

  }

  ngOnInit(): void {
  
   this.auth.checkUser();
   this.recallJsFuntions();
  }


  recallJsFuntions() {
    this.routerSubscription = this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(event => {
        this.loadJQueryScripts();
      });
  }

  public loadJQueryScripts() {
    const scriptUrls = [
      '/assets/web/lib/jquery/jquery.min.js',
      '/assets/web/lib/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/web/lib/feather-icons/feather.min.js',
      '/assets/web/lib/perfect-scrollbar/perfect-scrollbar.min.js',
      '/assets/web/lib/jquery.flot/jquery.flot.js',
      '/assets/web/lib/jquery.flot/jquery.flot.stack.js',
      '/assets/web/lib/jquery.flot/jquery.flot.resize.js',
      '/assets/web/lib/chart.js/Chart.bundle.min.js',
      '/assets/web/lib/jqvmap/jquery.vmap.min.js',
      '/assets/web/lib/jqvmap/maps/jquery.vmap.usa.js',
      '/assets/web/assets/js/dashforge.js',
      '/assets/web/assets/js/dashforge.aside.js',
      '/assets/web/assets/js/dashforge.sampledata.js',
      '/assets/web/lib/js-cookie/js.cookie.js',
      '/assets/web/assets/js/dashboard-one.js',
      '/assets/web/assets/js/dashforge.settings.js'
    ];

    scriptUrls.forEach(url => {
      this.loadScripts(url)
    });
  }

  public loadScripts(url: string) {
    const script = document.createElement('script');
    script.src = url;
    script.async = false; // Load script synchronously
    script.onload = () => {
      this.zone.run(() => {
        // Code to run after script is loaded (if needed)
      });
    };
    document.head.appendChild(script);
  }

  
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }



}
