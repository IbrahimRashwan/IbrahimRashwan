import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ALUserListService } from './aluser-list.service';
import { ALUserModelGet, ALUserModelGetAll } from '../aluser.model';
import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';
import { ALRoleModelGetAll } from 'app/main/ALRole/alrole.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ALUserService } from '../aluser.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';
import { ContentHeader } from './../../../layout/components/content-header/content-header.component';

@Component({
  selector: 'app-aluser-list',
  templateUrl: './aluser-list.component.html',
  styleUrls: ['./aluser-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ALUserListComponent implements OnInit {
  public rows:ALUserModelGetAll;
  public row:ALUserModelGet;
  public csvRowsData;
  public roles:ALRoleModelGetAll;
  public onRowsChanged:ALUserModelGetAll;
  public pages:number;
  public serverError = {};
  public FilterGroup = {
    page:1,
    limit:4,
    name:'',
    email:'',
    sort:'',
    role:'',
  }
  public csvCloumn = [
    {
      title:'Id',
      value:'_id'
    },
    {
      title:'Name',
      value:'name'
    },
    {
      title:'Email',
      value:'email'
    },
    {
      title:'Role',
      value:'role'
    },
    {
      title:'Password',
      value:'password'
    },
    {
      title:'Image',
      value:'image'
    }
  ]
  public csvCloumnSelected = []
  // public
  public contentHeaderVariable:ContentHeader;
  @BlockUI('list-block') listBlockUI: NgBlockUI;
  constructor(private ALUserListService:ALUserListService,private ALRoleListService:ALRoleListService,private ALUserService:ALUserService,private modalService:NgbModal,private ToastrService:ToastrService) { }

  ngOnInit(): void {
    // this.rows = this.ALUserListService.rows;
    this.onRowsChanged = this.ALUserListService.onRowsChanged.value;
    
    this.ALUserListService.onRowsChanged.subscribe(rows=>{
      this.rows = rows;
      this.csvRowsData =  this.csvFilter(this.csvCloumnSelected,'image.src','role.title');
      this.pages = this.ALUserListService.pages;
    });
    this.roles        = this.ALRoleListService.rows;

    this.FilterGroup = {...this.FilterGroup,...this.ALUserListService.queryParams}
    // breadcrumb default
    this.contentHeaderVariable = {
      headerTitle: 'Users List',
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
            isLink: false,
          }
        ]
      }
    };
  }
  filter(query,value,type){
    this.listBlockUI.start();
    this.ALUserListService.filter(query,value,type)
    this.listBlockUI.stop();
  }
  resetFilter(){
    
    this.listBlockUI.start();
    this.FilterGroup = {
      page:1,
      limit:4,
      name:'',
      email:'',
      sort:'',
      role:'',
    }
    this.ALUserListService.resetFilter(this.FilterGroup )
    this.listBlockUI.stop();
  }
  sort(key){
    this.listBlockUI.start();
    this.ALUserListService.sort(key);
    this.listBlockUI.stop();
  }
  findSort(key){
      return this.ALUserListService.findSort(key)
  }
 
  csvFilter(selected,...objects){
    var data = JSON.parse(JSON.stringify(this.rows?.data));
    this.csvRowsData = this.ALUserListService.csvFilter(data,selected,...objects);
    return this.ALUserListService.csvFilter(data,selected,...objects)
  }
  deleteModelOpen(deleteModel,row) {
    this.row = row;
    this.modalService.open(deleteModel, {
      centered: true,
      windowClass: 'modal modal-danger'
    });
  }
  deleteById(modal){
    this.ALUserService.deleteById(this.row?._id).subscribe(row => {
      this.ToastrService.success(this.row?.name+' Deleted successfully');
    },error=>{
      if(typeof error == 'object'){
        this.serverError = error
      }
      modal.dismiss('faild');
    },()=>{
      modal.dismiss('Success');
      this.ALUserListService.getRows();

    })
  }
}
