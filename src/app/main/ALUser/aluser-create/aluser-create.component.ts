import { Component, OnInit, ViewChild ,ViewEncapsulation} from '@angular/core';
import { ALUserModelGetLogin } from '../aluser.model';
import { ALUserCreateService } from './aluser-create.service';
import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';
import { ALUserService } from './../aluser.service';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { ALRoleModelGetAll } from 'app/main/ALRole/alrole.model';
import { ContentModule } from 'app/layout/components/content/content.module';

@Component({
  selector: 'app-aluser-create',
  templateUrl: './aluser-create.component.html',
  styleUrls: ['./aluser-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ALUserCreateComponent implements OnInit {
  @ViewChild('CreateFormGroup') CreateFormGroup: NgForm;
 

  public serverError:any;
  public roles:ALRoleModelGetAll;
  public FormData = new FormData();
  public contentHeaderVariable :ContentModule;
  public file ={image:{file:null,loading:false}};
  public createLoading = false;
  // public item:ALUserTypeGet;
  // public id:string;
  // public serverError:object;
  constructor(private ALRoleListService:ALRoleListService,private ALUserService:ALUserService,private ActivatedRoute:ActivatedRoute,private Router:Router,private ToastrService: ToastrService,) { }

  ngOnInit(): void {
    this.roles        = this.ALRoleListService.rows;
    this.contentHeaderVariable = {
      headerTitle: 'User Create',
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
            name: 'User Create',
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
      this.ALUserService.post(this.FormData).subscribe((item:ALUserModelGetLogin)=>{

        this.ToastrService.success(item?.name+' Created successfully','Success');

      },error=>{
        if(typeof error == 'object'){
          this.serverError = error;
          console.log('serverError',this.serverError);
         
        }
        this.createLoading = false
      },()=>{
        this.Router.navigate(['/user','list']);
        this.serverError = {};
        this.createLoading = false ;
      })
    }
    
  }

}
