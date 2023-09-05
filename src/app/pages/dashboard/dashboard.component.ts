import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { DataProvider } from 'src/app/providers/data/data';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // header = new HttpHeaders({
  //   'Authorization': 'Bearer 8t01gc14r1nd8r45s9t13rfj8228120225qmp03dhu9q3bj0g4h90584wo121327',
  //   'Content-Type': 'application/json',
  // });

  routerSubscription: any;
  


  constructor(
    private transaction: TransactionProvider,
    private data: DataProvider,
    public auth: AuthProvider,
    public route: Router,
    public zone: NgZone
  ) { 
   
  }

  ngOnInit(): void {
    this.auth.setUser();
    // this.transaction.updateWalletBalance(this.header);
    // this.recallJsFuntions();
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



}

