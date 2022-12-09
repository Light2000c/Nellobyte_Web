import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,

} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = localStorage.getItem('user_info') !== null;

    if (!isLoggedIn) {
      console.log('returning to login screen');
      this.route.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}
