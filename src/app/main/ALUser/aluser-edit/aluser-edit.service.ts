import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ALUserModel, ALUserModelGet, ALUserModelGetLogin } from '../aluser.model';
import { AuthenticationService } from 'app/auth/service';

@Injectable({
  providedIn: 'root'
})
export class ALUserEditService {

  public row: ALUserModelGetLogin;
  public onRowChanged: BehaviorSubject<any>;
  public currentUser: ALUserModelGetLogin;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient,private ALRoleListService:ALRoleListService,private AuthenticationService:AuthenticationService) {
    // Set the defaults
    this.onRowChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getRow(route?.params?.id),this.ALRoleListService.getRows(),this.getCurrentUser()]).then(() => {
        resolve();
      }, reject);
    });
  }


  /**
   * Get row
   */

  getRow(id:string): Promise<ALUserModelGet> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.extrnalApiUrl}/user/${id}`).subscribe((response: ALUserModelGetLogin) => {
        this.row = response;
        console.log(this.row)
        this.onRowChanged.next(this.row);
        resolve(this.row);
      }, reject);
      
    });
  }
  getCurrentUser(){
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.extrnalApiUrl}/user/auth/profile`).subscribe((response: ALUserModelGetLogin) => {
        this.currentUser = response;
        resolve(this.row);
      }, reject);
    });
  }
}
