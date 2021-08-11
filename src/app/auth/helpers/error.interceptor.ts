import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'app/auth/service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  /**
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private _authenticationService: AuthenticationService,private ToastrService: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this._router.navigate(['/pages/miscellaneous/not-authorized']);

          // ? Can also logout and reload if needed
          // this._authenticationService.logout();
          // location.reload(true);
        }
        // throwError
        const error = err.error.message || err.statusText;
        if(typeof error == 'string'){
          this.ToastrService.error(error)
        } else if(typeof error == 'object'){
          for(let key in error){
            this.ToastrService.error(error[key],key)
          }
        }
        return throwError(error);
      })
    );
  }
}
