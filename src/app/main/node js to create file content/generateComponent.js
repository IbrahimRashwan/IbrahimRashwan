

components.forEach(()=>{

})


console.clear()
var fs = require('fs');
var beautify = require('js-beautify').js;
function insertContent(){
    // var filesTypes = ['service.ts','model.ts','module.ts']



    var file = {
            from:'User',
            to:[
                {
                    name:'Address',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Area',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Branch',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Cart',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Category',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'City',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Contact',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Country',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Coupon',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Feq',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Footer',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Guest',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Header',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Notification',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Offer',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Order',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Pages',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Product',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Rate',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Role',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Seo',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Setting',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Subcategory',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                {
                    name:'Subscribe',
                    replaceed:'',
                    newValue:'',
                    children:[
                        'create',
                        'details',
                        'edit',
                        // 'delete',
                        'list',
                    ]
                },
                
           
                
            ],
            
        }

    
    file.to.forEach(childFile=>{
        fs.readFile(`../AL${file.from}/al${file.from}.service.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/al${childFile.name}.service.ts`,data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name))
            
            
            console.log(`../AL${file.from}/al${file.from}.service.ts`);
            console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
        });
        fs.readFile(`../AL${file.from}/al${file.from}.model.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/al${childFile.name}.model.ts`,data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name))
            
            console.log(`../AL${file.from}/al${file.from}.model.ts`);
            console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
        });
        fs.readFile(`../AL${file.from}/al${file.from}.module.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/al${childFile.name}.module.ts`,data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name))

            
            console.log(`../AL${file.from}/al${file.from}.module.ts`);
            console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
        });
        
        childFile.children.forEach(comp=>{
            fs.readFile(`../AL${file.from}/AL${file.from}-${comp}/AL${file.from}-${comp}.component.ts`, 'utf8', function(err, data){
                fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}-${comp}/AL${childFile.name}-${comp}.component.ts`,data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name))
                
                
                console.log('=====================================');
                console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
            });
            fs.readFile(`../AL${file.from}/AL${file.from}-${comp}/AL${file.from}-${comp}.component.scss`, 'utf8', function(err, data){
                fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}-${comp}/AL${childFile.name}-${comp}.component.scss`,data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name))
                
                
                console.log('=====================================');
                console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
            });
            fs.readFile(`../AL${file.from}/AL${file.from}-${comp}/AL${file.from}-${comp}.component.html`, 'utf8', function(err, data){
                fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}-${comp}/AL${childFile.name}-${comp}.component.html`,data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name))
                
                
                console.log('=====================================');
                console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
            });
            fs.readFile(`../AL${file.from}/AL${file.from}-${comp}/AL${file.from}-${comp}.service.ts`, 'utf8', function(err, data){
                fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}-${comp}/AL${childFile.name}-${comp}.service.ts`,data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name))
                
                
                console.log('=====================================');
                console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
            });
        })
    })
   
}


// insertContent();


function model(component,fields){
    var contentGet = '';
    var contentPost = '';
    var modelContent = '';
    
    fields.forEach(field=>{
        // textEditor / file / text / number  // ceckbox // radio // select // email // password // textarea // phone
        if(field.type == 'languages'){
            field.languages.forEach(lang=>{
                contentPost+=field.name+'_'+lang+(field.required ? '' : '?')+':'+field.dataType+',';
            })
        } else{
            contentPost+=field.name+(field.required ? '' : '?')+':'+field.dataType+',';
        }

        // get
        if(field.type == 'languages'){
            contentGet += field.name+':{'+field.languages.map(lang=>{
                return lang+(field.required ? '' : '?')+':'+field.dataType;
            }) + '},'
        } else if(field.type == 'ref'){
                modelContent+=`import { AL${field.refService}ModelGet } from '../AL${field.refService}/AL${field.refService}.model';`;
            if(field.refType == 'single'){
                contentGet+=field.name+(field.required ? '' : '?')+`:AL${field.refService}ModelGet,`
            } else {
                contentGet+=field.name+(field.required ? '' : '?')+`:AL${field.refService}ModelGet[],`
            }
        } else {
            contentGet+=field.name+(field.required ? '' : '?')+':'+field.dataType+',';

        }
    });

    modelContent += `

        export interface AL${component}Model {
           ${contentPost}
        }
        export interface AL${component}ModelGet {
            _id:string,
            ${contentGet}
        }
        export interface AL${component}ModelGetAll {
            data: AL${component}ModelGet[],
            totalCount: number,
            page: number,
            limit: number
        }
        export interface AL${component}Queryparams {
            page?: number,
            limit?: number
            sort?: any
        }

    `
    return modelContent;
    
}
var fields = [
    {
        name:'country',
        type:'ref',
        dataType:"string",
        languages:['en','ar'],
        input:'text', 
        required:true, 
        refService:'Country',
        refType:'single',

    },
    {
        name:'city',
        type:'ref',
        dataType:"string",
        languages:['en','ar'],
        // input:'text', 
        required:true, 
        refService:'City',
        refType:'single',

    },
    {
        name:'area',
        type:'ref',
        dataType:"string",
        languages:['en','ar'],
        // input:'text', 
        required:true, 
        refService:'Area',
        refType:'single',

    },
    {
        name:'user',
        type:'ref',
        dataType:"string",
        languages:['en','ar'],
        // input:'text', 
        required:true, 
        refService:'User',
        refType:'single',

    },
    {
        name:'street',
        type:'string',
        dataType:"string",
        // languages:['en','ar'],
        // input:'text', 
        required:true, 
        // refService:'Area',
        // refType:'single',

    },
    {
        name:'email',
        type:'string',
        dataType:"string",
        // languages:['en','ar'],
        // input:'text', 
        required:true, 
        // refService:'Area',
        // refType:'single',

    },
    {
        name:'phone',
        type:'string',
        dataType:"string",
        // languages:['en','ar'],
        // input:'text', 
        required:true, 
        // refService:'Area',
        // refType:'single',

    },
];
console.log(model('Address',fields));





function setModelFileForAllProject(){
    var file = {
        from:'User',
        to:[
             //done
            {
                name:'Address',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Area',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Branch',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'address',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'map',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Cart',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Category',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'City',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Contact',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                
                fields:[
                    {
                        name:'message',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'subject',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Country',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Coupon',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'code',
                        type:`string`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'type',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'condition',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Feq',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'category',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'questions',
                        type:`Array<
                        q: {
                            en:string,
                            ar:string,
                        },
                        a:
                            en:string,
                            ar:string,
                        }
                        >`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Footer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Guest',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'company',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Header',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Notification',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'content',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'url',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Offer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'gallery',
                        type:'file',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },













            {
                name:'Order',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },{
                        name:'guest',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Guest',
                        refType:'single',
                
                    },
                    {
                        name:'address',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Address',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Pages',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'content',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Product',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'price',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'stock',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'sale',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'saleType',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'countOfSales',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'gallery',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Rate',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'rate',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'review',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },
            // {
            //     name:'Role',
            //     replaceed:'',
            //     newValue:'',
            //     children:[
            //         'create',
            //         'details',
            //         'edit',
            //         // 'delete',
            //         'list',
            //     ]
            // },
            {
                name:'Seo',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'description',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'keywords',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'author',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyright',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'product',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'ProductCoupon',
                        refType:'single',
                
                    },
                    {
                        name:'category',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'single',
                
                    },
                    {
                        name:'subCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Subcategory',
                        refType:'single',
                
                    },
                    {
                        name:'subSubCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'SubSubcategory',
                        refType:'single',
                
                    },
                    {
                        name:'offer',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Offer',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Setting',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'siteName',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'brief',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingPrice',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingDesc',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'payments',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyRights',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'addresses',
                        type:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        dataType:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'headerLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'FooterLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'favicon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },  
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Subcategory',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Subscribe',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],fields:[
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                
                ]
            },
            
       
            
        ],
        
    }
    file.to.forEach(childFile=>{
        fs.readFile(`../AL${file.from}/al${file.from}.model.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/al${childFile.name}.model.ts`,beautify(model(childFile.name,childFile.fields), { indent_size: 2, space_in_empty_paren: true }))
            
            
            console.log(`../AL${file.from}/al${file.from}.model.ts`);
            console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name));
        });
    })

}

// setModelFileForAllProject()


function setMainServiceFileForAllProject(){
    var file = {
        from:'User',
        to:[
             //done
            {
                name:'Address',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Area',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Branch',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'address',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'map',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Cart',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Category',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'City',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Contact',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                
                fields:[
                    {
                        name:'message',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'subject',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Country',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Coupon',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'code',
                        type:`string`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'type',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'condition',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Feq',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'category',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'questions',
                        type:`Array<
                        q: {
                            en:string,
                            ar:string,
                        },
                        a:
                            en:string,
                            ar:string,
                        }
                        >`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Footer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Guest',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'company',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Header',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Notification',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'content',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'url',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Offer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'gallery',
                        type:'file',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },













            {
                name:'Order',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },{
                        name:'guest',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Guest',
                        refType:'single',
                
                    },
                    {
                        name:'address',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Address',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Pages',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'content',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Product',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'price',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'stock',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'sale',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'saleType',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'countOfSales',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'gallery',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Rate',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'rate',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'review',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },
            // {
            //     name:'Role',
            //     replaceed:'',
            //     newValue:'',
            //     children:[
            //         'create',
            //         'details',
            //         'edit',
            //         // 'delete',
            //         'list',
            //     ]
            // },
            {
                name:'Seo',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'description',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'keywords',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'author',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyright',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'product',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'ProductCoupon',
                        refType:'single',
                
                    },
                    {
                        name:'category',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'single',
                
                    },
                    {
                        name:'subCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Subcategory',
                        refType:'single',
                
                    },
                    {
                        name:'subSubCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'SubSubcategory',
                        refType:'single',
                
                    },
                    {
                        name:'offer',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Offer',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Setting',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'siteName',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'brief',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingPrice',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingDesc',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'payments',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyRights',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'addresses',
                        type:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        dataType:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'headerLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'FooterLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'favicon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },  
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Subcategory',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Subscribe',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],fields:[
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                
                ]
            },
            
       
            
        ],
        
    }
    file.to.forEach(childFile=>{
        console.log(`../AL${childFile.name}/AL${childFile.name}.service.ts`)
        console.log(`../AL${childFile.name}/AL${childFile.name}.service.ts`)
        fs.readFile(`../AL${childFile.name}/AL${childFile.name}.service.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}.service.ts`,`
            import { HttpClient } from '@angular/common/http';
            import { Injectable } from '@angular/core';
            import { environment } from 'environments/environment';
            import { AL${childFile.name}Model, AL${childFile.name}ModelGet, AL${childFile.name}ModelGetAll } from './al${childFile.name}.model';
            
            @Injectable({
              providedIn: 'root'
            })
            export class AL${childFile.name}Service {
            /**
               *
               * @param {HttpClient} _http
               */
             constructor(private _http: HttpClient) {}
             /**
              * Get all ${childFile.name.toLowerCase()}
              */
             getAll() {
               return this._http.get<AL${childFile.name}ModelGetAll>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}\`);
             }
              /**
              * Get  ${childFile.name.toLowerCase()} by id
              */
               getById(id: string) {
                return this._http.get<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}/\${id}\`);
              }
            
             /**
              * post  ${childFile.name.toLowerCase()}
              */
             post(body:AL${childFile.name}Model | FormData) {
               return this._http.post<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}\`,body);
             }
             /**
              * put  ${childFile.name.toLowerCase()} by id
              */
             putById(id: string,body:AL${childFile.name}Model | FormData) {
               return this._http.put<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}/\${id}\`,body);
             }
            
            
             /**
              * delete  ${childFile.name.toLowerCase()} by id
              */
             deleteById(id: string) {
               return this._http.delete<AL${childFile.name}Model>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}/\${id}\`);
             }
            }
            
            `)
            
        //    console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name).replace(` /**
        //    * Get ${childFile.name} profile
        //    */
        //   get${childFile.name}Login() {
        //     return this._http.get<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/${childFile.name}/auth/profile\`);
        //   }`,''))
        });
    })

}

setMainServiceFileForAllProject()
















// service component 


function setinsideComponentFileForAllProject(){
    var mediaSection = '';
    var content = '';
    var modelContent = '';
    var file = {
        from:'User',
        to:[
             //done
            {
                name:'Address',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Area',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Branch',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'address',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'map',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Cart',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Category',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'City',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Contact',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                
                fields:[
                    {
                        name:'message',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'subject',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Country',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Coupon',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'code',
                        type:`string`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'type',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'condition',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Feq',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'category',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'questions',
                        type:`Array<
                        q: {
                            en:string,
                            ar:string,
                        },
                        a:
                            en:string,
                            ar:string,
                        }
                        >`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Footer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Guest',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'company',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Header',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Notification',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'content',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'url',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Offer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'gallery',
                        type:'file',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },













            {
                name:'Order',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },{
                        name:'guest',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Guest',
                        refType:'single',
                
                    },
                    {
                        name:'address',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Address',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Pages',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'content',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Product',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'price',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'stock',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'sale',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'saleType',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'countOfSales',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'gallery',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Rate',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'rate',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'review',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },
            // {
            //     name:'Role',
            //     replaceed:'',
            //     newValue:'',
            //     children:[
            //         'create',
            //         'details',
            //         'edit',
            //         // 'delete',
            //         'list',
            //     ]
            // },
            {
                name:'Seo',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'description',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'keywords',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'author',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyright',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'product',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'ProductCoupon',
                        refType:'single',
                
                    },
                    {
                        name:'category',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'single',
                
                    },
                    {
                        name:'subCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Subcategory',
                        refType:'single',
                
                    },
                    {
                        name:'subSubCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'SubSubcategory',
                        refType:'single',
                
                    },
                    {
                        name:'offer',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Offer',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Setting',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'siteName',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'brief',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingPrice',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingDesc',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'payments',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyRights',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'addresses',
                        type:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        dataType:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'headerLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'FooterLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'favicon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },  
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Subcategory',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Subscribe',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],fields:[
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                
                ]
            },
            
       
            
        ],
        
    }

    fields.forEach(field=>{
        // textEditor / file / text / number  // ceckbox // radio // select // email // password // textarea // phone
        if(field.type == 'file'){
            if(field.mediaType == 'single'){
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
           
        } else if(field.type == 'email' || field.type == 'password'){
            content +=`
            <div class="col-md-6">
                <div class="form-group">
                <label for="${field.name}">${field.name}</label>
                <input
                    type="${field.dataType}"
                    id="${field.name}"
                    class="form-control"
                    placeholder="${field.name}"
                    name="${field.name}"
                    #${field.name}="ngModel"
                    ${field.type == 'email'  ? 'email' :''}
                    ${field.required == true  ? 'required' :''}
                    
                    [ngModel]=""
                
                    [class.error]="(CreateFormGroup?.submitted && ${field.name}?.invalid ) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})"
                />
                ${field.required == true ? `
                    
                    <span *ngIf="(CreateFormGroup?.submitted && ${field.name}?.invalid) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})" class="invalid-form">
                        <small class="form-text text-danger" *ngIf="${field.name}?.errors?.required">This field is required!</small>
                    </span>
                ` : `
                `}
                ${field.type == 'email' ? `
                    <span *ngIf="(CreateFormGroup?.submitted && ${field.name}?.invalid) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.${field.name}) || (serverError?.${field.name})" class="invalid-form">
                        <small class="form-text text-danger" *ngIf="${field.name}?.errors?.${field.name}">This field not valid!</small>
                    </span>
                ` : `
                `}
                
                <span *ngIf="serverError?.${field.name}" class="invalid-form">
                    <small class="form-text text-danger" >{{serverError?.${field.name}}}</small>
                    </span>
                </div>
            </div>
            `;
        } else if(field.type == 'boolean'){
            content += `
            <div class="col-md-6">
                <div class="form-group">
                    <label for="${field.name}">${field.name}</label>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input"  ${field.required == true  ? 'required' :''} id="${field.name}" checked 
                        #${field.name}="ngModel" [ngModel]="true"/>
                        <label class="custom-control-label" for="${field.name}">
                        <span class="switch-icon-left"><i data-feather="check"></i></span>
                        <span class="switch-icon-right"><i data-feather="x"></i></span>
                        </label>
                    </div>
                </div>
                ${field.required == true ? `
                    
                    <span *ngIf="(CreateFormGroup?.submitted && ${field.name}?.invalid) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})" class="invalid-form">
                        <small class="form-text text-danger" *ngIf="${field.name}?.errors?.required">This field is required!</small>
                    </span>
                ` : `
                `}
                
                <span *ngIf="serverError?.${field.name}" class="invalid-form">
                    <small class="form-text text-danger" >{{serverError?.${field.name}}}</small>
                    </span>
                </div>
            </div>
          `
        }else if(field.type == 'text'){
            if(field.textType == 'text'){
                content +=`
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="${field.name}">${field.name}</label>
                    <input
                        type="text"
                        id="${field.name}"
                        class="form-control"
                        placeholder="${field.name}"
                        name="${field.name}"
                        #${field.name}="ngModel"
                        ${field.required == true  ? 'required' :''}
                        
                        [ngModel]=""
                    
                        [class.error]="(CreateFormGroup?.submitted && ${field.name}?.invalid ) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})"
                    />
                    ${field.required == true ? `
                        
                        <span *ngIf="(CreateFormGroup?.submitted && ${field.name}?.invalid) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})" class="invalid-form">
                            <small class="form-text text-danger" *ngIf="${field.name}?.errors?.required">This field is required!</small>
                        </span>
                    ` : `
                    `}
                    
                    <span *ngIf="serverError?.${field.name}" class="invalid-form">
                        <small class="form-text text-danger" >{{serverError?.${field.name}}}</small>
                        </span>
                    </div>
                </div>
                `;
            } else if(field.textType == 'editor'){
                content +=`
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="${field.name}">${field.name}</label>
                    <quill-editor [(ngModel)]="fullEditorRef" [modules]="{ syntax: true, toolbar: [['code-block']] }"
                        ><div quill-editor-toolbar>
                            <span class="ql-formats">
                            <button class="ql-bold" [title]="'Bold'"></button>
                            <button class="ql-italic" [title]="'italic'"></button>
                            <button class="ql-underline" [title]="'underline'"></button>
                            </span>
                            <span class="ql-formats">
                            <select class="ql-align" [title]="'Alignment'">
                                <option selected></option>
                                <option value="center"></option>
                                <option value="right"></option>
                                <option value="justify"></option>
                            </select>
                            </span>
                            <span class="ql-formats">
                            <button class="ql-list" value="ordered" type="button"></button>
                            </span>
                            <span class="ql-formats">
                            <button class="ql-link" value="ordered" type="button"></button>
                            <button class="ql-image" value="ordered" type="button"></button>
                            <button class="ql-video" value="ordered" type="button"></button>
                            </span>
                            <span class="ql-formats">
                            <button class="ql-formula" value="ordered" type="button"></button>
                            <button class="ql-code-block" value="ordered" type="button"></button>
                            </span>
                            <span class="ql-formats">
                            <button class="ql-clean" value="ordered" type="button"></button>
                            </span>
                        </div>
                        </quill-editor>

                    ${field.required == true ? `
                        
                        <span *ngIf="(CreateFormGroup?.submitted && ${field.name}?.invalid) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})" class="invalid-form">
                            <small class="form-text text-danger" *ngIf="${field.name}?.errors?.required">This field is required!</small>
                        </span>
                    ` : `
                    `}
                    
                    <span *ngIf="serverError?.${field.name}" class="invalid-form">
                        <small class="form-text text-danger" >{{serverError?.${field.name}}}</small>
                        </span>
                    </div>
                </div>
                `;
            } else if(field.textType == 'textarea'){
                content +=`
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="${field.name}">${field.name}</label>
                    <textarea
                        type="text"
                        id="${field.name}"
                        class="form-control"
                        placeholder="${field.name}"
                        name="${field.name}"
                        #${field.name}="ngModel"
                        ${field.required == true  ? 'required' :''}
                        
                        [ngModel]=""
                    
                        [class.error]="(CreateFormGroup?.submitted && ${field.name}?.invalid ) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})"
                    />
                    </textarea>
                    ${field.required == true ? `
                        
                        <span *ngIf="(CreateFormGroup?.submitted && ${field.name}?.invalid) || (${field.name}?.touched && ${field.name}?.invalid && ${field.name}?.errors?.required) || (serverError?.${field.name})" class="invalid-form">
                            <small class="form-text text-danger" *ngIf="${field.name}?.errors?.required">This field is required!</small>
                        </span>
                    ` : `
                    `}
                    
                    <span *ngIf="serverError?.${field.name}" class="invalid-form">
                        <small class="form-text text-danger" >{{serverError?.${field.name}}}</small>
                        </span>
                    </div>
                </div>
                `;
            }
        }
    });

    modelContent += `

    <div class="content-wrapper container-xxl p-0">
    <div class="content-body">
      <!-- users edit start -->
      <app-content-header [contentHeader]="contentHeaderVariable"></app-content-header>

      <section class="app-user-edit">
        <div class="card">
         
          <form class="card-body" (ngSubmit)="CreateFormGroupSubmit()" #CreateFormGroup="ngForm">
             <!-- users edit media object start -->
             ${mediaSection}

            <!-- users edit media object ends -->
             <!-- users edit account form start -->
             <div class="form-validate" >
              <div class="row">
            ${content}
         
                
                <div class="col-12 d-flex flex-sm-row flex-column mt-2">
                  <button
                    type="submit"
                    class="btn mb-1 mb-sm-0 mr-0 mr-sm-1"
                    rippleEffect
                    [disabled]="CreateFormGroup?.invalid || createLoading"
                    [ngClass]="{
                      'btn-primary':CreateFormGroup?.valid && !createLoading,
                      'btn-defualt':CreateFormGroup?.invalid || createLoading
                    }"
                    >
                    <ng-container *ngIf="!createLoading;else createLoadingSection">
                      Create
                    </ng-container>
                    <ng-template #createLoadingSection>
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span class="ml-25 align-middle">Loading...</span>
                    </ng-template>

                  </button>
                  <button type="button" [disabled]="!CreateFormGroup.valueChanges" (click)="CreateFormGroup.reset()" class="btn btn-outline-secondary" rippleEffect>
                    Reset
                  </button>
                </div>
              </div>
            </div>
            <!-- users edit account form ends -->
          </form>
        </div>
      </section>
      <!-- users edit ends -->
    </div>
  </div>

    `

    file.to.forEach(childFile=>{
        console.log(`../AL${childFile.name}/AL${childFile.name}-create/AL${childFile.name}-create.component.ts`)
        console.log(`../AL${childFile.name}/AL${childFile.name}-create/AL${childFile.name}-create.component.ts`)
        fs.readFile(`../AL${childFile.name}/AL${childFile.name}-create/AL${childFile.name}-create.component.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}-create/AL${childFile.name}-create.component.ts`,`
                ${modelContent}
            
            `)
        });
        console.log(`../AL${childFile.name}/AL${childFile.name}-edit/AL${childFile.name}-edit.component.ts`)
        console.log(`../AL${childFile.name}/AL${childFile.name}-edit/AL${childFile.name}-edit.component.ts`)
        fs.readFile(`../AL${childFile.name}/AL${childFile.name}-edit/AL${childFile.name}-edit.component.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}-edit/AL${childFile.name}-edit.component.ts`,`
                ${modelContent}
            
            `)
        });
        console.log(`../AL${childFile.name}/AL${childFile.name}-details/AL${childFile.name}-details.component.ts`)
        console.log(`../AL${childFile.name}/AL${childFile.name}-details/AL${childFile.name}-details.component.ts`)
        fs.readFile(`../AL${childFile.name}/AL${childFile.name}-details/AL${childFile.name}-details.component.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}-details/AL${childFile.name}-details.component.ts`,`
                
            
            `)
        });
    })
    return modelContent;
}






function serviceComponent(){
    var file = {
        from:'User',
        to:[
             //done
            {
                name:'Address',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Area',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Branch',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'address',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'map',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Cart',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Category',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'City',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Contact',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                
                fields:[
                    {
                        name:'message',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'subject',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Country',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'zip',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Coupon',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'code',
                        type:`string`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'type',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'condition',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Feq',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'category',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'questions',
                        type:`Array<
                        q: {
                            en:string,
                            ar:string,
                        },
                        a:
                            en:string,
                            ar:string,
                        }
                        >`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                   
                ]
            },
            {
                name:'Footer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Guest',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'phone',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'country',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        input:'text', 
                        required:true, 
                        refService:'Country',
                        refType:'single',
                
                    },
                    {
                        name:'city',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'City',
                        refType:'single',
                
                    },
                    {
                        name:'area',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Area',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'street',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'company',
                        type:'string',
                        dataType:"string",
                        // languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                ]
            },
            {
                name:'Header',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Product',
                        refType:'multi',
                
                    },
                    {
                        name:'offers',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Offer',
                        refType:'multi',
                
                    },
                    {
                        name:'pages',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Pages',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Notification',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'content',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'url',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },

                ]
            },
            {
                name:'Offer',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'gallery',
                        type:'file',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'products',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'start',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'end',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },













            {
                name:'Order',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'products',
                        type:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        dataType:`
                            Array<{
                                product: ALProductModelGet
                                count:number
                            }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'coupon',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },{
                        name:'guest',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Guest',
                        refType:'single',
                
                    },
                    {
                        name:'address',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Address',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'User',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Pages',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'name',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'content',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'sStatus',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Product',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'subCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'Subcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'subSubCategories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'SubSubcategory',
                        refType:'multi',
                
                    },
                    {
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'price',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'stock',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'sale',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'saleType',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'countOfSales',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'gallery',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                
                ]
            },
            {
                name:'Rate',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'rate',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'review',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'user',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                ]
            },
            // {
            //     name:'Role',
            //     replaceed:'',
            //     newValue:'',
            //     children:[
            //         'create',
            //         'details',
            //         'edit',
            //         // 'delete',
            //         'list',
            //     ]
            // },
            {
                name:'Seo',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'description',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'keywords',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'author',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyright',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'product',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'ProductCoupon',
                        refType:'single',
                
                    },
                    {
                        name:'category',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'single',
                
                    },
                    {
                        name:'subCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Subcategory',
                        refType:'single',
                
                    },
                    {
                        name:'subSubCategory',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'SubSubcategory',
                        refType:'single',
                
                    },
                    {
                        name:'offer',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Offer',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Setting',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'siteName',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'brief',
                        type:'languages',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingPrice',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'shippingDesc',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'payments',
                        type:'Array<object>',
                        dataType:"Array<object>",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'copyRights',
                        type:'string',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'addresses',
                        type:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        dataType:`
                            Array<title: {
                                en:string,
                                ar:string,
                            },
                            phone: string,
                            fax: string,
                            email: string>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'headerLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'FooterLogo',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'favicon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },  
                    {
                        name:'phones',
                        type:'string',
                        dataType:`Array<{
                            title: {
                                en: string,
                                arstring,
                                
                            },
                            phone: string
                        }>
                        `,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        refService:'User',
                        refType:'single',
                
                    },
                ]
            },
            {
                name:'Subcategory',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],
                fields:[
                    {
                        name:'title',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:true, 
                        // refService:'Area',
                        // refType:'single',
                
                    },
                    {
                        name:'desc',
                        type:`text`,
                        dataType:`string`,
                        textType:`content`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'brief',
                        type:`languages`,
                        dataType:`string`,
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        // refService:'Area',
                        // refType:'single',
                
                    },{
                        name:'image',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'icon',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'banner',
                        type:'file',
                        dataType:"object",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'categories',
                        type:'ref',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Category',
                        refType:'multi',
                
                    },
                    {
                        name:'seq',
                        type:'number',
                        dataType:"number",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    {
                        name:'status',
                        type:'boolean',
                        dataType:"boolean",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                ]
            },
            {
                name:'Subscribe',
                replaceed:'',
                newValue:'',
                children:[
                    'create',
                    'details',
                    'edit',
                    // 'delete',
                    'list',
                ],fields:[
                    {
                        name:'email',
                        type:'email',
                        dataType:"string",
                        languages:['en','ar'],
                        // input:'text', 
                        required:false, 
                        refService:'Coupon',
                        refType:'single',
                
                    },
                    
                
                ]
            },
            
       
            
        ],
        
    }
    file.to.forEach(childFile=>{
        console.log(`../AL${childFile.name}/AL${childFile.name}.service.ts`)
        console.log(`../AL${childFile.name}/AL${childFile.name}.service.ts`)
        fs.readFile(`../AL${childFile.name}/AL${childFile.name}.service.ts`, 'utf8', function(err, data){
            fs.writeFileSync(`../AL${childFile.name}/AL${childFile.name}.service.ts`,`
            import { HttpClient } from '@angular/common/http';
            import { Injectable } from '@angular/core';
            import { environment } from 'environments/environment';
            import { AL${childFile.name}Model, AL${childFile.name}ModelGet, AL${childFile.name}ModelGetAll } from './al${childFile.name}.model';
            
            @Injectable({
              providedIn: 'root'
            })
            export class AL${childFile.name}Service {
            /**
               *
               * @param {HttpClient} _http
               */
             constructor(private _http: HttpClient) {}
             /**
              * Get all ${childFile.name.toLowerCase()}
              */
             getAll() {
               return this._http.get<AL${childFile.name}ModelGetAll>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}\`);
             }
              /**
              * Get  ${childFile.name.toLowerCase()} by id
              */
               getById(id: string) {
                return this._http.get<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}/\${id}\`);
              }
            
             /**
              * post  ${childFile.name.toLowerCase()}
              */
             post(body:AL${childFile.name}Model | FormData) {
               return this._http.post<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}\`,body);
             }
             /**
              * put  ${childFile.name.toLowerCase()} by id
              */
             putById(id: string,body:AL${childFile.name}Model | FormData) {
               return this._http.put<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}/\${id}\`,body);
             }
            
            
             /**
              * delete  ${childFile.name.toLowerCase()} by id
              */
             deleteById(id: string) {
               return this._http.delete<AL${childFile.name}Model>(\`\${environment.extrnalApiUrl}/ ${childFile.name.toLowerCase()}/\${id}\`);
             }
            }
            
            `)
            
        //    console.log(data.replace(new RegExp(file.from.toLowerCase(),'g') ,childFile.name.toLowerCase()).replace(new RegExp(file.from,'g') ,childFile.name).replace(` /**
        //    * Get ${childFile.name} profile
        //    */
        //   get${childFile.name}Login() {
        //     return this._http.get<AL${childFile.name}ModelGet>(\`\${environment.extrnalApiUrl}/${childFile.name}/auth/profile\`);
        //   }`,''))
        });
    })

}

setinsideComponentFileForAllProject()
