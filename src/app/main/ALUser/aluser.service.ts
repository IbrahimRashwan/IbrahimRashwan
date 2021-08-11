import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ALUserModel, ALUserModelGet, ALUserModelGetAll } from './aluser.model';

@Injectable({
  providedIn: 'root'
})
export class ALUserService {
/**
   *
   * @param {HttpClient} _http
   */
 constructor(private _http: HttpClient) {}

 /**
  * Get User profile
  */
 getUserLogin() {
   return this._http.get<ALUserModelGet>(`${environment.extrnalApiUrl}/user/auth/profile`);
 }
 /**
  * Get all users
  */
 getAll() {
   return this._http.get<ALUserModelGetAll>(`${environment.extrnalApiUrl}/user`);
 }
  /**
  * Get user by id
  */
   getById(id: string) {
    return this._http.get<ALUserModelGet>(`${environment.extrnalApiUrl}/user/${id}`);
  }

 /**
  * post user
  */
 post(body:ALUserModel | FormData) {
   return this._http.post<ALUserModelGet>(`${environment.extrnalApiUrl}/user`,body);
 }
 /**
  * put user by id
  */
 putById(id: string,body:ALUserModel | FormData) {
   return this._http.put<ALUserModelGet>(`${environment.extrnalApiUrl}/user/${id}`,body);
 }


 /**
  * delete user by id
  */
 deleteById(id: string) {
   return this._http.delete<ALUserModel>(`${environment.extrnalApiUrl}/user/${id}`);
 }
}
