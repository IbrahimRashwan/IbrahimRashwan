import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'app/auth/service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private _authenticationService: AuthenticationService) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;
    
    if (currentUser) {
      console.log(route.data)
      console.log(currentUser.role?.type)
      // check if route is restricted by role
      // console.log(currentUser)
      // console.log(route.data.roles)
      // console.log(currentUser.role?.type)
      // console.log(route.data.roles.indexOf(currentUser.role?.type))
      if (route.data.roles && route.data.roles.indexOf(currentUser.role?.type) === -1) {
        // role not authorised so redirect to not-authorized page
        this._router.navigate(['/pages/miscellaneous/not-authorized']);
        return false;
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
