
export interface ALRoleModel {
    title:string,
    type:string
}
export interface ALRoleModelGet {
    _id:string,
    title:string,
    type:string
}
export interface ALRoleModelGetAll {
    data: ALRoleModelGet[],
    totalCount: number,
    page: number,
    limit: number
}
export interface ALRoleQueryparams {
    page?: number,
    limit?: number
    sort?: any
}
