
var fs = require('fs');
var components =fs.readdirSync('../').filter(file=>{return file.startsWith('AL') && !file.includes('User')&& !file.includes('Login')&& !file.includes('SubSubcategory')&& !file.includes('Role')}).map(comp=>{
    return({
        name:comp,
        create:{
            ts:`
            import { Component, OnInit, ViewChild ,ViewEncapsulation} from '@angular/core';

            @Component({
              selector: 'app-${comp.toLowerCase()}-create',
              templateUrl: './${comp.toLowerCase()}-create.component.html',
              styleUrls: ['./${comp.toLowerCase()}-create.component.scss'],
              encapsulation: ViewEncapsulation.None
            })
            export class ${comp}CreateComponent implements OnInit {
                ngOnInit(): void {}
            }
            `,
            html:`


            `,
            scss:'',
            service:'',
        },
        list:{
            ts:`
            import { Component, OnInit, ViewChild ,ViewEncapsulation} from '@angular/core';

            @Component({
              selector: 'app-${comp.toLowerCase()}-list',
              templateUrl: './${comp.toLowerCase()}-list.component.html',
              styleUrls: ['./${comp.toLowerCase()}-list.component.scss'],
              encapsulation: ViewEncapsulation.None
            })
            export class ${comp}ListComponent implements OnInit {
                ngOnInit(): void {}
            }
            `,
            html:'',
            scss:'',
            service:'',
        },
        details:{
            ts:'',
            html:'',
            scss:'',
            service:'',
        },
        edit:{
            ts:`
            import { Component, OnInit, ViewChild ,ViewEncapsulation} from '@angular/core';

            @Component({
              selector: 'app-${comp.toLowerCase()}-edit',
              templateUrl: './${comp.toLowerCase()}-edit.component.html',
              styleUrls: ['./${comp.toLowerCase()}-edit.component.scss'],
              encapsulation: ViewEncapsulation.None
            })
            export class ${comp}EditComponent implements OnInit {
                ngOnInit(): void {}
            }
            `,
            html:'',
            scss:'',
            service:'',
        }
        
        
    })
}) 

var models = [
    { name: 'ALAddress', 
        fields:[
            {name:'country', field:'select',fieldType:'text'},
            {name:'city', field:'select',fieldType:'text'},
            {name:'area', field:'select',fieldType:'text'},
            {name:'street', field:'text',fieldType:'text'},
            {name:'email', field:'email',fieldType:'text'},
            {name:'phone', field:'string',fieldType:'text'},
        ]
    },
    { name: 'ALArea', 
        fields:[
            {name:'title_en',field: 'text',fieldType: 'text'}, 
            {name:'title_ar',field: 'text',fieldType: 'text'}, 
            {name:'country',field: 'select',fieldType: 'select'}, 
            {name:'city',field: 'select',fieldType: 'select'}, 
            {name:'zip',field: 'text',fieldType: 'text'}, 
            {name:'status',field: 'boolean',fieldType: 'boolean'},
        ]
    },
    { name: 'ALBranch', 
        fields:[

        ]
    },
    { name: 'ALCart', 
        fields:[

        ]
    },
    { name: 'ALCategory', 
        fields:[

        ]
    },
    { name: 'ALCity', 
        fields:[

        ]
    },
    { name: 'ALContact', 
        fields:[

        ]
    },
    { name: 'ALCountry', 
        fields:[

        ]
    },
    { name: 'ALFeq', 
        fields:[

        ]
    },
    { name: 'ALFooter', 
        fields:[

        ]
    },
    { name: 'ALGuest', 
        fields:[

        ]
    },
    { name: 'ALHeader', 
        fields:[

        ]
    },
    { name: 'ALLogin', 
        fields:[

        ]
    },
    { name: 'ALNotification', 
        fields:[

        ]
    },
    { name: 'ALOffer', 
        fields:[

        ]
    },
    { name: 'ALOrder', 
        fields:[

        ]
    },
    { name: 'ALPages', 
        fields:[

        ]
    },
    { name: 'ALProduct', 
        fields:[

        ]
    },
    { name: 'ALRate', 
        fields:[

        ]
    },
    { name: 'ALSeo', 
        fields:[

        ]
    },
    { name: 'ALSetting', 
        fields:[

        ]
    },
    { name: 'ALSubcategory', 
        fields:[

        ]
    },
    { name: 'ALSubscribe', 
        fields:[

        ]
    },
    { name: 'ALSubSubcategory', 
        fields:[

        ]
    }
]

// Add content To html files

components.forEach(comp=>{
     fs.writeFileSync(`../${comp.name}/${comp.name}-create/${comp.name}-create.component.html`,`
        ${comp.create.html}
    `)
     fs.writeFileSync(`../${comp.name}/${comp.name}-create/${comp.name}-create.component.ts`,`
        ${comp.create.ts}
    `)
     fs.writeFileSync(`../${comp.name}/${comp.name}-list/${comp.name}-list.component.html`,`
        ${comp.list.html}
    `)
     fs.writeFileSync(`../${comp.name}/${comp.name}-list/${comp.name}-list.component.ts`,`
        ${comp.list.ts}
    `)
     fs.writeFileSync(`../${comp.name}/${comp.name}-edit/${comp.name}-edit.component.html`,`
        ${comp.edit.html}
    `)
     fs.writeFileSync(`../${comp.name}/${comp.name}-edit/${comp.name}-edit.component.ts`,`
        ${comp.edit.ts}
    `)
})


function setCreateHtmlContent(){
    var mediaSection = '',
        ContentSection = '',
        content = '';
    models.forEach(model=>{
        model.fields.forEach(field=>{
            if(field.type == 'file'){
                if(field.fieldType == 'single'){
                    mediaSection+=
                        `
                                        <div class="col-lg-3 col-md-4 col-12 media mb-2">
                                            <!-- ${field.name}?.value?.dataFile ||  -->
                                            <img
                                                class="user-avatar users-avatar-shadow rounded mr-2 my-25 cursor-pointer"
                                                [src]="file?.${field.name}?.file?.dataFile || 'assets/images/custom/default-image.png'"
                                                height="90"
                                                width="90"
                                            />
                                        
                                        <div class="media-body mt-50">
                                            <div class="col-12 d-flex mt-1 px-0">
                                            <label class="btn btn-primary mr-75 mb-0" for="change-picture">
                                                <span class="d-none d-sm-block">
                                                <ng-container *ngIf="!file?.${field.name}?.loading;else imageEditLoadingPC">
                                                    Change
                                                </ng-container>
                                                <ng-template #${field.name}EditLoadingPC>
                                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span class="ml-25 align-middle">Loading...</span>
                                                </ng-template>
                                                </span>
                                                <input
                                                class="form-control"
                                                type="file"
                                                id="change-picture"
                                                hidden
                                                [disabled]="file?.${field.name}?.loading"
                                                name="${field.name}"
                                                #${field.name}="ngModel"
                                                ngModel
                                                accept="${field.name}/png, ${field.name}/jpeg, ${field.name}/jpg"
                                                (change)="uploadFile('${field.name}',$event)"
                                                />
                                                <span class="d-block d-sm-none">
                                                <i *ngIf="!file?.${field.name}?.loading;else ${field.name}EditLoadingMobile" class="mr-0" data-feather="edit"></i>
                                                <ng-template #${field.name}EditLoadingMobile>
                                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span class="ml-25 align-middle">Loading...</span>
                                                </ng-template>
                                                </span>
                                            </label>
                                            <button *ngIf="file?.${field.name}?.file?.dataFile" class="btn btn-outline-secondary d-none d-sm-block" type="button" [disabled]="file?.${field.name}?.loading" (click)="removeFile('${field.name}')" rippleEffect>
                                                <ng-container *ngIf="!file?.${field.name}?.loading;else ${field.name}RemoveLoadingPC">
                                                Remove
                                                </ng-container>
                                                <ng-template #${field.name}RemoveLoadingPC>
                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                <span class="ml-25 align-middle">Loading...</span>
                                                </ng-template>
                                            </button>
                                            <button *ngIf="file?.${field.name}?.file?.dataFile" class="btn btn-outline-secondary d-block d-sm-none" type="button" [disabled]="file?.${field.name}?.loading" (click)="removeFile('${field.name}')">
                                                <i *ngIf="!file?.${field.name}?.loading;else ${field.name}RemoveLoadingMobile" class="mr-0" data-feather="trash-2"></i>
                                                <ng-template #${field.name}RemoveLoadingMobile>
                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                <span class="ml-25 align-middle">Loading...</span>
                                                </ng-template>
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                        `;
                } else {
                    mediaSection+=
                        `
                        <div class="col-lg-3 col-md-4 col-12 media mb-2">
                        <!-- ${field.name}?.value?.dataFile ||  -->
                        <img
                            class="user-avatar users-avatar-shadow rounded mr-2 my-25 cursor-pointer"
                            [src]="file?.${field.name}?.file?.dataFile || 'assets/images/custom/default-image.png'"
                            height="90"
                            width="90"
                        />
                    
                    <div class="media-body mt-50">
                        <div class="col-12 d-flex mt-1 px-0">
                        <label class="btn btn-primary mr-75 mb-0" for="change-picture">
                            <span class="d-none d-sm-block">
                            <ng-container *ngIf="!file?.${field.name}?.loading;else imageEditLoadingPC">
                                Change
                            </ng-container>
                            <ng-template #${field.name}EditLoadingPC>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="ml-25 align-middle">Loading...</span>
                            </ng-template>
                            </span>
                            <input
                            class="form-control"
                            type="file"
                            id="change-picture"
                            hidden
                            [disabled]="file?.${field.name}?.loading"
                            multi
                            name="${field.name}"
                            #${field.name}="ngModel"
                            ngModel
                            accept="${field.name}/png, ${field.name}/jpeg, ${field.name}/jpg"
                            (change)="uploadFile('${field.name}',$event)"
                            />
                            <span class="d-block d-sm-none">
                            <i *ngIf="!file?.${field.name}?.loading;else ${field.name}EditLoadingMobile" class="mr-0" data-feather="edit"></i>
                            <ng-template #${field.name}EditLoadingMobile>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="ml-25 align-middle">Loading...</span>
                            </ng-template>
                            </span>
                        </label>
                        <button *ngIf="file?.${field.name}?.file?.dataFile" class="btn btn-outline-secondary d-none d-sm-block" type="button" [disabled]="file?.${field.name}?.loading" (click)="removeFile('${field.name}')" rippleEffect>
                            <ng-container *ngIf="!file?.${field.name}?.loading;else ${field.name}RemoveLoadingPC">
                            Remove
                            </ng-container>
                            <ng-template #${field.name}RemoveLoadingPC>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span class="ml-25 align-middle">Loading...</span>
                            </ng-template>
                        </button>
                        <button *ngIf="file?.${field.name}?.file?.dataFile" class="btn btn-outline-secondary d-block d-sm-none" type="button" [disabled]="file?.${field.name}?.loading" (click)="removeFile('${field.name}')">
                            <i *ngIf="!file?.${field.name}?.loading;else ${field.name}RemoveLoadingMobile" class="mr-0" data-feather="trash-2"></i>
                            <ng-template #${field.name}RemoveLoadingMobile>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span class="ml-25 align-middle">Loading...</span>
                            </ng-template>
                        </button>
                        </div>
                    </div>
                    </div>
                        `;
                }
            } else if(field.type == 'boolean'){

            } else if(field.type == 'text'){
                if(field.fieldType =="longtext"){
                    ContentSection+=`
                        
                    `
                } else {

                }
            } else if(field.type == 'select'){
                
            } else if(field.type == 'email'){
                
            }else if(field.type == 'password'){
                
            }
        })
    })
}
