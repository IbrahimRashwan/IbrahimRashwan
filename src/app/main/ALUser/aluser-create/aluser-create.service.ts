import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ALUserModelGetLogin } from '../aluser.model';
import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';

@Injectable({
  providedIn: 'root'
})
export class ALUserCreateService {

  public row: ALUserModelGetLogin;
  public onRowChanged: BehaviorSubject<any>;
  public currentUser: ALUserModelGetLogin;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient,private ALRoleListService:ALRoleListService) {
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
      Promise.all([this.ALRoleListService.getRows()]).then(() => {
        resolve();
      }, reject);
    });
  }
}
