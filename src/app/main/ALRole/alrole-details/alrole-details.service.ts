import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ALRoleModelGet, ALRoleModelGetLogin } from '../alrole.model';

@Injectable({
  providedIn: 'root'
})
export class ALRoleDetailsService {

  public row: ALRoleModelGetLogin;
  public onRowChanged: BehaviorSubject<any>;
  public currentRole: ALRoleModelGetLogin;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
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
      Promise.all([this.getRow(route?.params?.id)]).then(() => {
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
        this.onRowChanged.next(this.row);
        resolve(this.row);
      }, reject);
      
    });
  }
}
