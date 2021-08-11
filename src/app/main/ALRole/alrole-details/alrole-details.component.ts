import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentModule } from 'app/layout/components/content/content.module';
import { ALRoleModelGetLogin } from '../alrole.model';
import { ALRoleDetailsService } from './alrole-details.service';
@Component({
  selector: 'app-alrole-details',
  templateUrl: './alrole-details.component.html',
  styleUrls: ['./alrole-details.component.scss'],
  
  encapsulation: ViewEncapsulation.None
})
export class ALRoleDetailsComponent implements OnInit {

  public row:ALRoleModelGetLogin;
  public contentHeaderVariable:ContentModule;
  constructor(private ALRoleDetailsService:ALRoleDetailsService) { }

  ngOnInit(): void {
    this.ALRoleDetailsService.onRowChanged.subscribe(row=>{
      
      this.row = this.ALRoleDetailsService.row;

      this.contentHeaderVariable = {
        headerTitle: 'Role Details',
        actionButton: true,
        breadcrumb:{
          links:[
            {
              name: 'Home',
              isLink: true,
              link: '/'
            },
            {
              name: 'Roles List',
              isLink: true,
              link: '/role/list'
            },
            {
              name:this.row?.name,
              isLink: false,
            }
          ]
        }
      };
    })
  }

}
