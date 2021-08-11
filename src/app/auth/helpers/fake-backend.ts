
/**
 *  ? Tip:
 *
 * For Actual Node.js - Role Based Authorization Tutorial with Example API
 * Refer: https://jasonwatmore.com/post/2018/11/28/nodejs-role-based-authorization-tutorial-with-example-api
 * Running an Angular 9 client app with the Node.js Role Based Auth API
 */

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User, Role } from 'app/auth/models';
import { AuthenticationService } from '../service';
import { ALUserModelGet } from 'app/main/ALUser/aluser.model';

// Users with role
const users: ALUserModelGet[] = [
  {
    _id: '1',
    email: 'superadmin@demo.com',
    password: 'superadmin',
    name: 'John',
    image: 'avatar-s-11.jpg',
    role: {
      title:Role.SuperAdmin,
      type:Role.SuperAdmin
    }
  },
  {
    _id: '2',
    email: 'admin@demo.com',
    password: 'admin',
    name: 'Nataly',
    image: 'avatar-s-2.jpg',
    role: {
      title:Role.Admin,
      type:Role.Admin
    }
  },
  {
    _id: '3',
    email: 'driver@demo.com',
    password: 'driver',
    name: 'Rose',
    image: 'avatar-s-3.jpg',
    role: {
      title:Role.Driver,
      type:Role.Driver
    }
  }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(private _authenticationService : AuthenticationService){

  }
  public get currentUser(){
    return this._authenticationService.currentUser;
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(handleRoute));
    // .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    // .pipe(delay(500))
    // .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { email, password } = body;
      const user = users.find(x => x.email === email && x.password === password);
      if (!user) return error('Username or password is incorrect');
      return ok({
        id: user._id,
        email: user.email,
        firstName: user.name,
        avatar: user.image,
        role: user.role,
        token: `fake-jwt-token.${user._id}`
      });
    }

    function getUsers() {
      if (!isAdmin() && !isSuperAdmin()) return unauthorized();
      return ok(users);
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      // only admins can access other user records
      if ( !isAdmin() && !isSuperAdmin() && currentUser()._id !== idFromUrl()) return unauthorized();

      const user = users.find(x => x._id === idFromUrl());
      return ok(user);
    }

    // helper functions

    function ok(body) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'unauthorized' } });
    }

    function error(message) {
      return throwError({ status: 400, error: { message } });
    }

    function isLoggedIn() {
      const authHeader = headers.get('Authorization') || '';
      return authHeader.startsWith('Bearer '+this.currentUser?.token);
    }

    function isAdmin() {
      return isLoggedIn() && currentUser().role.type === Role.Admin;
    }
    function isSuperAdmin() {
      return isLoggedIn() && currentUser().role.type === Role.SuperAdmin;
    }
    function isDriver() {
      return isLoggedIn() && currentUser().role.type === Role.Driver;
    }

    function currentUser() {
      if (!isLoggedIn()) return;
      const id = headers.get('Authorization').split('.')[1];
      return users.find(x => x._id === id);
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return urlParts[urlParts.length - 1];
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
