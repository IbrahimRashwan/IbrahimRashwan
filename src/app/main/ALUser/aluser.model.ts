import { ALRoleModel } from "../ALRole/alrole.model";

export interface ALUserModel {
    name:string,
    email:string,
    password:string,
    image : Object,
    role: number,
}
export interface ALUserModelGet {
    _id:string,
    name:string,
    email:string,
    password:string,
    image : Object,
    role: ALRoleModel,
}
export interface ALUserModelGetLogin {
    _id:string,
    name:string,
    email:string,
    token:string,
    password:string,
    image : Object,
    role: ALRoleModel,
}
export interface ALUserModelGetAll {
    data: ALUserModelGet[],
    totalCount: number,
    page: number,
    limit: number
}
export interface ALUserQueryparams {
    page?: number,
    limit?: number
    sort?: any
}
