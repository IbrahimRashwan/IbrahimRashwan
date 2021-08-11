import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentModule } from 'app/layout/components/content/content.module';
import { ALUserModelGetLogin } from '../aluser.model';
import { ALUserDetailsService } from './aluser-details.service';
@Component({
  selector: 'app-aluser-details',
  templateUrl: './aluser-details.component.html',
  styleUrls: ['./aluser-details.component.scss'],
  
  encapsulation: ViewEncapsulation.None
})
export class ALUserDetailsComponent implements OnInit {

  public row:ALUserModelGetLogin;
  public contentHeaderVariable:ContentModule;
  constructor(private ALUserDetailsService:ALUserDetailsService) { }

  ngOnInit(): void {
    this.ALUserDetailsService.onRowChanged.subscribe(row=>{
      
      this.row = this.ALUserDetailsService.row;

      this.contentHeaderVariable = {
        headerTitle: 'User Details',
        actionButton: true,
        breadcrumb:{
          links:[
            {
              name: 'Home',
              isLink: true,
              link: '/'
            },
            {
              name: 'Users List',
              isLink: true,
              link: '/user/list'
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
