import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ALRoleListService } from './alrole-list.service';
import { ALRoleModelGet, ALRoleModelGetAll } from '../alrole.model';
import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';
import { ALRoleModelGetAll } from 'app/main/ALRole/alrole.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ALRoleService } from '../alrole.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';
import { ContentHeader } from './../../../layout/components/content-header/content-header.component';

@Component({
  selector: 'app-alrole-list',
  templateUrl: './alrole-list.component.html',
  styleUrls: ['./alrole-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ALRoleListComponent implements OnInit {
  public rows:ALRoleModelGetAll;
  public row:ALRoleModelGet;
  public csvRowsData;
  public roles:ALRoleModelGetAll;
  public onRowsChanged:ALRoleModelGetAll;
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
  constructor(private ALRoleListService:ALRoleListService,private ALRoleListService:ALRoleListService,private ALRoleService:ALRoleService,private modalService:NgbModal,private ToastrService:ToastrService) { }

  ngOnInit(): void {
    // this.rows = this.ALRoleListService.rows;
    this.onRowsChanged = this.ALRoleListService.onRowsChanged.value;
    
    this.ALRoleListService.onRowsChanged.subscribe(rows=>{
      this.rows = rows;
      this.csvRowsData =  this.csvFilter(this.csvCloumnSelected,'image.src','role.title');
      this.pages = this.ALRoleListService.pages;
    });
    this.roles        = this.ALRoleListService.rows;

    this.FilterGroup = {...this.FilterGroup,...this.ALRoleListService.queryParams}
    // breadcrumb default
    this.contentHeaderVariable = {
      headerTitle: 'Roles List',
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
            isLink: false,
          }
        ]
      }
    };
  }
  filter(query,value,type){
    this.listBlockUI.start();
    this.ALRoleListService.filter(query,value,type)
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
    this.ALRoleListService.resetFilter(this.FilterGroup )
    this.listBlockUI.stop();
  }
  sort(key){
    this.listBlockUI.start();
    this.ALRoleListService.sort(key);
    this.listBlockUI.stop();
  }
  findSort(key){
      return this.ALRoleListService.findSort(key)
  }
 
  csvFilter(selected,...objects){
    var data = JSON.parse(JSON.stringify(this.rows?.data));
    this.csvRowsData = this.ALRoleListService.csvFilter(data,selected,...objects);
    return this.ALRoleListService.csvFilter(data,selected,...objects)
  }
  deleteModelOpen(deleteModel,row) {
    this.row = row;
    this.modalService.open(deleteModel, {
      centered: true,
      windowClass: 'modal modal-danger'
    });
  }
  deleteById(modal){
    this.ALRoleService.deleteById(this.row?._id).subscribe(row => {
      this.ToastrService.success(this.row?.name+' Deleted successfully');
    },error=>{
      if(typeof error == 'object'){
        this.serverError = error
      }
      modal.dismiss('faild');
    },()=>{
      modal.dismiss('Success');
      this.ALRoleListService.getRows();

    })
  }
}
