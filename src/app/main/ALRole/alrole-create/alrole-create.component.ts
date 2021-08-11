import { Component, OnInit, ViewChild ,ViewEncapsulation} from '@angular/core';
import { ALRoleModelGetLogin } from '../alrole.model';
import { ALRoleCreateService } from './alrole-create.service';
import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';
import { ALRoleService } from './../alrole.service';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { ALRoleModelGetAll } from 'app/main/ALRole/alrole.model';
import { ContentModule } from 'app/layout/components/content/content.module';

@Component({
  selector: 'app-alrole-create',
  templateUrl: './alrole-create.component.html',
  styleUrls: ['./alrole-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ALRoleCreateComponent implements OnInit {
  @ViewChild('CreateFormGroup') CreateFormGroup: NgForm;
 

  public serverError:any;
  public roles:ALRoleModelGetAll;
  public FormData = new FormData();
  public contentHeaderVariable :ContentModule;
  public file ={image:{file:null,loading:false}};
  public createLoading = false;
  // public item:ALRoleTypeGet;
  // public id:string;
  // public serverError:object;
  constructor(private ALRoleListService:ALRoleListService,private ALRoleService:ALRoleService,private ActivatedRoute:ActivatedRoute,private Router:Router,private ToastrService: ToastrService,) { }

  ngOnInit(): void {
    this.roles        = this.ALRoleListService.rows;
    this.contentHeaderVariable = {
      headerTitle: 'Role Create',
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
            name: 'Role Create',
            isLink: false
          }
        ]
      }
    };
  }
  uploadFile(field,event){
    
    if (event.target.files && event.target.files[0]) {
      this.file[field].loading = true;
      this.file[field].file = event.target.files[0];
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.file[field].file.dataFile = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      
      this.file[field].loading = false;
    }
  }
  removeFile(field){
    this.file[field].loading = true;
    this.file[field].file = null;
    this.file[field].loading = false;
  }
  CreateFormGroupSubmit(){
   
    this.FormData = new FormData();
    this.FormData.append('name',this.CreateFormGroup.value.name)
    this.FormData.append('email',this.CreateFormGroup.value.email)
    this.FormData.append('role',this.CreateFormGroup.value.role)
    this.FormData.append('password',this.CreateFormGroup.value.password)

    if(this.file.image){
      this.FormData.append('image',this.file.image.file )
    }
    if(this.CreateFormGroup.valid){
      this.createLoading = true;
      this.ALRoleService.post(this.FormData).subscribe((item:ALRoleModelGetLogin)=>{

        this.ToastrService.success(item?.name+' Created successfully','Success');

      },error=>{
        if(typeof error == 'object'){
          this.serverError = error;
          console.log('serverError',this.serverError);
         
        }
        this.createLoading = false
      },()=>{
        this.Router.navigate(['/role','list']);
        this.serverError = {};
        this.createLoading = false ;
      })
    }
    
  }

}
