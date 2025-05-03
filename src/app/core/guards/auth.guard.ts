import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isAuthenticated = this.isLoggedIn(); // بررسی وضعیت ورود کاربر

    if (!isAuthenticated) {
      return this.router.createUrlTree(['/auth/login']);
    }

    return true;
  }

  private isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
