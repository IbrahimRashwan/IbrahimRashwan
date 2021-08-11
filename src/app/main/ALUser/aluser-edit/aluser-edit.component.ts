import { Observable } from 'rxjs';
import { ALUserModelGet, ALUserModelGetLogin } from './../aluser.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup,NgForm,NgModel,Validators } from '@angular/forms';
import { ALUserEditService } from './aluser-edit.service';
import { ALRoleListService } from './../../ALRole/alrole-list/alrole-list.service';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { ALUserService } from './../aluser.service';
import { ALRoleModelGetAll } from 'app/main/ALRole/alrole.model';
import { ContentHeader } from 'app/layout/components/content-header/content-header.component';

@Component({
  selector: 'app-aluser-edit',
  templateUrl: './aluser-edit.component.html',
  styleUrls: ['./aluser-edit.component.scss']
})
export class ALUserEditComponent implements OnInit {
  @ViewChild('EditFormGroup') EditFormGroup: NgForm;
 

  public row:ALUserModelGetLogin;
  public serverError:any;
  public roles:ALRoleModelGetAll;
  public currentUser:ALUserModelGetLogin;
  public FormData = new FormData();
  
  public file ={image:{file:null,loading:false}};
  public editLoading = false;
  public contentHeaderVariable:ContentHeader;
  
  // public id:string;
  // public serverError:object;
  constructor(private ALUserEditService:ALUserEditService,private ALRoleListService:ALRoleListService,private ALUserService:ALUserService,private ActivatedRoute:ActivatedRoute,private Router:Router,private ToastrService: ToastrService,) { }

  ngOnInit(): void {
    this.ALUserEditService.onRowChanged.subscribe(row=>{
      this.row          = row;
      this.currentUser  = this.ALUserEditService.currentUser;
      this.roles        = this.ALRoleListService.rows;

      this.contentHeaderVariable = {
        headerTitle: 'User Update',
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
              name: 'Update ( '+this.row?.name+' )',
              isLink: false,
            }
          ]
        }
      };
    })
    
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
    if(this.file[field]?.file){
      this.file[field].file = null;
    } else{
      this.row.image = null;
    }
    this.file[field].loading = false;
  }
  EditFormGroupSubmit(){
    this.FormData.append('name',this.EditFormGroup.value.name)
    this.FormData.append('email',this.EditFormGroup.value.email)
    this.FormData.append('role',this.EditFormGroup.value.role)
    this.FormData.append('password',this.EditFormGroup.value.password)

      this.FormData.append('image',this.file.image.file || ( this.row.image ?  JSON.stringify(this.row.image) : this.row.image))
    
    
    if(this.EditFormGroup.valid){
      this.editLoading = true;
      this.ALUserService.putById(this.row?._id,this.FormData).subscribe((item:ALUserModelGetLogin)=>{

        this.ToastrService.success(item?.name+' Updated successfully');

      },error=>{
        if(typeof error == 'object'){
          this.serverError = error
        }
        
        this.editLoading = false;
      },()=>{
        this.Router.navigate(['/user','list']);
        this.serverError = {};
        this.editLoading = false;
      })
    }
    
  }

  // getItem(){
  //   this.ALUserService.getById(this.id).subscribe((item:ALUserTypeGet)=>{
  //     this.item = item
  //   },error=>{
  //     if(typeof error?.message != 'object'){
  //       this.ToastrService.error('Error',error?.message)
  //     }else {
  //       this.serverError = error?.message
  //     }
  //   },()=>{
  //     this.Router.navigate(['/user','list']);
  //     this.serverError = {};
  //   })
  // }
}
