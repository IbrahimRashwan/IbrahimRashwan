import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CsvModule } from '@ctrl/ngx-csv';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { BlockUIModule } from 'ng-block-ui';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { Role } from 'app/auth/models';

import { ALRoleDeleteComponent } from './alrole-delete/alrole-delete.component';
import { ALRoleCreateComponent } from './alrole-create/alrole-create.component';
import { ALRoleListComponent } from './alrole-list/alrole-list.component';
import { ALRoleEditComponent } from './alrole-edit/alrole-edit.component';
import { ALRoleDetailsComponent } from './alrole-details/alrole-details.component';

import { ALRoleListService } from './alrole-list/alrole-list.service';
import { ALRoleEditService } from './alrole-edit/alrole-edit.service';
import { ALRoleDetailsService } from './alrole-details/alrole-details.service';
import { ALRoleCreateService } from './alrole-create/alrole-create.service';

const routes: Routes = [  
  {
    path: 'create',
    component: ALRoleCreateComponent,
    resolve: {
      datatables: ALRoleCreateService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALRoleCreateComponent' }
  },
  {
    path: 'list',
    component: ALRoleListComponent,
    resolve: {
      ALRoleList: ALRoleListService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALRoleListComponent' }
  },
  {
    path: 'edit/:id',
    component: ALRoleEditComponent,
    resolve: {
      ALRoleEdit: ALRoleEditService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALRoleEditComponent' }
  },
  {
    path: 'details/:id',
    component: ALRoleDetailsComponent,
    resolve: {
      datatables: ALRoleDetailsService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALRoleDetailsComponent' }
  },
];

@NgModule({
  declarations: [
    ALRoleCreateComponent,
    ALRoleListComponent,
    ALRoleEditComponent,
    ALRoleDetailsComponent,
    ALRoleDeleteComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    TranslateModule,
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule,
    NgxDatatableModule,
    CsvModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    BlockUIModule.forRoot()
    
  ], 
  providers: [ALRoleListService,ALRoleEditService]
})
export class ALRoleModule { }
