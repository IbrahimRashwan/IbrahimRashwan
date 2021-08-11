import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ALRoleModel, ALRoleModelGet, ALRoleModelGetAll } from './alrole.model';

@Injectable({
  providedIn: 'root'
})
export class ALRoleService {
/**
   *
   * @param {HttpClient} _http
   */
 constructor(private _http: HttpClient) {}


 /**
  * Get all roles
  */
 getAll() {
   return this._http.get<ALRoleModelGetAll>(`${environment.extrnalApiUrl}/role`);
 }
  /**
  * Get role by id
  */
   getById(id: string) {
    return this._http.get<ALRoleModelGet>(`${environment.extrnalApiUrl}/role/${id}`);
  }

 /**
  * post role
  */
 post(body:ALRoleModel | FormData) {
   return this._http.post<ALRoleModelGet>(`${environment.extrnalApiUrl}/role`,body);
 }
 /**
  * put role by id
  */
 putById(id: string,body:ALRoleModel | FormData) {
   return this._http.put<ALRoleModelGet>(`${environment.extrnalApiUrl}/role/${id}`,body);
 }


 /**
  * delete role by id
  */
 deleteById(id: string) {
   return this._http.delete<ALRoleModel>(`${environment.extrnalApiUrl}/role/${id}`);
 }
}
