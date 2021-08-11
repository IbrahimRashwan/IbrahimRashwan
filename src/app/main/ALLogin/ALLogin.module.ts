import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

// import { AuthForgotPasswordV1Component } from 'app/main/pages/authentication/auth-forgot-password-v1/auth-forgot-password-v1.component';
// import { AuthForgotPasswordV2Component } from 'app/main/pages/authentication/auth-forgot-password-v2/auth-forgot-password-v2.component';

// import { AuthLoginV1Component } from 'app/main/pages/authentication/auth-login-v1/auth-login-v1.component';
import { ALLoginComponent } from './ALLogin.component';

// import { AuthRegisterV1Component } from 'app/main/pages/authentication/auth-register-v1/auth-register-v1.component';
// import { AuthRegisterV2Component } from 'app/main/pages/authentication/auth-register-v2/auth-register-v2.component';

// import { AuthResetPasswordV1Component } from 'app/main/pages/authentication/auth-reset-password-v1/auth-reset-password-v1.component';
// import { AuthResetPasswordV2Component } from 'app/main/pages/authentication/auth-reset-password-v2/auth-reset-password-v2.component';

// routing
const routes: Routes = [
  {
    path: 'login',
    component: ALLoginComponent
  }
];

@NgModule({
  declarations: [
    ALLoginComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, FormsModule, ReactiveFormsModule, CoreCommonModule]
})
export class ALLoginModule {}
