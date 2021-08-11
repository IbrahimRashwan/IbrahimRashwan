import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';
import { ALUserModelGet, ALUserModelGetLogin } from 'app/main/ALUser/aluser.model';
import { ALUserService } from 'app/main/ALUser/aluser.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<ALUserModelGetLogin>;

  //private
  private currentUserSubject: BehaviorSubject<ALUserModelGetLogin>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService,private ALUserService: ALUserService) {
    this.currentUserSubject = new BehaviorSubject<ALUserModelGetLogin>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): ALUserModelGetLogin {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is Super Admin
   */
   get isSuperAdmin() {
    return this.currentUser && this.currentUserSubject.value.role?.type === Role.SuperAdmin;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role?.type === Role.Admin;
  }

  /**
   *  Confirms if user is admin
   */
  get isDriver() {
    return this.currentUser && this.currentUserSubject.value.role?.type === Role.Driver;
  }


  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.extrnalApiUrl}/user/auth/login`, { email, password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            localStorage.setItem('currentUser', JSON.stringify(user));
                  // Display welcome toast!
                  setTimeout(() => {
                    this._toastrService.success(
                      'You have successfully logged in as an' + user?.role?.title
                    );
                  }, 2500);

                  // notify
                  this.currentUserSubject.next(user);
          

          }

          return user;
        })
      );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }
}
