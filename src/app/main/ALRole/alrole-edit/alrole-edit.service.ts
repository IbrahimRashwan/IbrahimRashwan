import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ALRoleModel, ALRoleModelGet, ALRoleModelGetLogin } from '../alrole.model';
import { AuthenticationService } from 'app/auth/service';

@Injectable({
  providedIn: 'root'
})
export class ALRoleEditService {

  public row: ALRoleModelGetLogin;
  public onRowChanged: BehaviorSubject<any>;
  public currentRole: ALRoleModelGetLogin;
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
      Promise.all([this.getRow(route?.params?.id),this.ALRoleListService.getRows(),this.getCurrentRole()]).then(() => {
        resolve();
      }, reject);
    });
  }


  /**
   * Get row
   */

  getRow(id:string): Promise<ALRoleModelGet> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.extrnalApiUrl}/role/${id}`).subscribe((response: ALRoleModelGetLogin) => {
        this.row = response;
        console.log(this.row)
        this.onRowChanged.next(this.row);
        resolve(this.row);
      }, reject);
      
    });
  }
  getCurrentRole(){
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.extrnalApiUrl}/role/auth/profile`).subscribe((response: ALRoleModelGetLogin) => {
        this.currentRole = response;
        resolve(this.row);
      }, reject);
    });
  }
}
