import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ALUserModelGet, ALUserModelGetLogin } from '../aluser.model';

@Injectable({
  providedIn: 'root'
})
export class ALUserDetailsService {

  public row: ALUserModelGetLogin;
  public onRowChanged: BehaviorSubject<any>;
  public currentUser: ALUserModelGetLogin;
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

  getRow(id:string): Promise<ALUserModelGet> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.extrnalApiUrl}/user/${id}`).subscribe((response: ALUserModelGetLogin) => {
        this.row = response;
        this.onRowChanged.next(this.row);
        resolve(this.row);
      }, reject);
      
    });
  }
}
