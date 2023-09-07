import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import * as $ from 'jquery';
import { AuthProvider } from './providers/auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nellobyte';
  routerSubscription: any;

  constructor(
   public route: Router,
   public zone: NgZone,
   public auth: AuthProvider,
  ){
    
  }
  
  ngOnInit() {
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
