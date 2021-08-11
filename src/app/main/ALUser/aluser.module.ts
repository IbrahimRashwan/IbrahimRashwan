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

import { ALUserDeleteComponent } from './aluser-delete/aluser-delete.component';
import { ALUserCreateComponent } from './aluser-create/aluser-create.component';
import { ALUserListComponent } from './aluser-list/aluser-list.component';
import { ALUserEditComponent } from './aluser-edit/aluser-edit.component';
import { ALUserDetailsComponent } from './aluser-details/aluser-details.component';

import { ALUserListService } from './aluser-list/aluser-list.service';
import { ALUserEditService } from './aluser-edit/aluser-edit.service';
import { ALUserDetailsService } from './aluser-details/aluser-details.service';
import { ALUserCreateService } from './aluser-create/aluser-create.service';

const routes: Routes = [  
  {
    path: 'create',
    component: ALUserCreateComponent,
    resolve: {
      datatables: ALUserCreateService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALUserCreateComponent' }
  },
  {
    path: 'list',
    component: ALUserListComponent,
    resolve: {
      ALUserList: ALUserListService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALUserListComponent' }
  },
  {
    path: 'edit/:id',
    component: ALUserEditComponent,
    resolve: {
      ALUserEdit: ALUserEditService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALUserEditComponent' }
  },
  {
    path: 'details/:id',
    component: ALUserDetailsComponent,
    resolve: {
      datatables: ALUserDetailsService
    },
    data: {roles:[Role.SuperAdmin], animation: 'ALUserDetailsComponent' }
  },
];

@NgModule({
  declarations: [
    ALUserCreateComponent,
    ALUserListComponent,
    ALUserEditComponent,
    ALUserDetailsComponent,
    ALUserDeleteComponent
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
  providers: [ALUserListService,ALUserEditService]
})
export class ALUserModule { }
