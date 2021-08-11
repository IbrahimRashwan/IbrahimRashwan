import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ALRoleModelGetAll, ALRoleQueryparams } from '../alrole.model';
@Injectable({
  providedIn: 'root'
})
export class ALRoleListService {

  public rows: ALRoleModelGetAll;
  public pages: number;
  public onRowsChanged: BehaviorSubject<any>;
  public queryParams:ALRoleQueryparams;
  public sortValue;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient,private Router:Router) {
    // Set the defaults
    this.onRowsChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
   this.queryParams =  route?.queryParams;
   this.sortValue = this.queryParams.sort || ''
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getRows(route?.queryParams)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */

  getRows(queryParams?): Promise<ALRoleModelGetAll> {
    console.log('search',queryParams);
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.extrnalApiUrl}/role`,{params:queryParams || this.queryParams }).subscribe((response: ALRoleModelGetAll) => {
        console.log(response)
        this.rows = response;
        this.pages = Math.ceil(this.rows?.totalCount / this.rows?.limit)
        this.onRowsChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }

  filter(query,value,type){
    if(type == 'single'){

      this.queryParams = {...this.queryParams,[query] : value};
      this.getRows(this.queryParams)
      
      this.Router.navigate([],{queryParams:this.queryParams})
    } else {
      if(this.queryParams[query]){ 
        if(value == null){
          this.queryParams = {...this.queryParams,[query]:[]}
          this.getRows(this.queryParams)
          this.Router.navigate([],{queryParams:this.queryParams});
        }else {
          this.queryParams[query] = Array.isArray(this.queryParams[query]) ? this.queryParams[query] : [this.queryParams[query]];
          
          value = Array.isArray(value) ?value : [value]
        this.queryParams = {...this.queryParams,[query]:value}
          this.getRows(this.queryParams)
        
          this.Router.navigate([],{queryParams:this.queryParams});
        }
        
      } else {
        if(value == null){
          this.queryParams = {...this.queryParams,[query] : []};
          this.getRows(this.queryParams)
          this.Router.navigate([],{queryParams:this.queryParams});
        }else {
          value = Array.isArray(value) ?value : [value]
          this.queryParams = {...this.queryParams,[query] : value};
          this.getRows(this.queryParams)
          
          this.Router.navigate([],{queryParams:this.queryParams});
        }
    
      }
    }
  }
  resetFilter(defualt){
    this.queryParams = defualt;
   this.sortValue = this.queryParams.sort || '';
   this.getRows(this.queryParams)
   this.Router.navigate([],{queryParams:{}});
  }
  sort(key){
    var sortArray = this.sortValue.split(" ");
    var index     = this.sortValue.indexOf(key);

   
    if(index == -1){
      this.sortValue = key+':1';
    }
    else{
      var sortKeyAndValue =  sortArray?.find(s =>{
        return s.toLowerCase().indexOf(key.toLowerCase()) != -1;
      });
      var sortKeyAndValueIndex = sortArray.indexOf(sortKeyAndValue);
      var sortKeyAndValueArray = sortKeyAndValue.split(":");
        if(sortKeyAndValueArray[1] == 1){
          this.sortValue= this.sortValue.replace(key+':1',key+':-1');
        } else {
          sortArray.splice(sortKeyAndValueIndex,1).join(' ');
          this.sortValue = sortArray.join(' ');
        }
      
    }
    this.queryParams = {...this.queryParams,sort:this.sortValue};
    
    this.getRows(this.queryParams)
    this.Router.navigate([],{queryParams:this.queryParams});
    
  }
  
  findSort(key){
    var sortArray = this.sortValue.split(" ");
    var index     = this.sortValue.indexOf(key);

   
    if(index == -1){
      return false;
    }
    else{
      var sortKeyAndValue =  sortArray?.find(s =>{
        return s.toLowerCase().indexOf(key.toLowerCase()) != -1;
      });
      var sortKeyAndValueArray = sortKeyAndValue.split(":");
        if(sortKeyAndValueArray[1] == 1){
          return 'up'
        } else {
          return 'down'
        }
      
    }
    
  }
  csvFilter(data,selected,...objects){
    data.forEach(d=>{
      for(let itemKey in d){
        if(selected.length > 0 && selected.indexOf(itemKey) == -1){
          delete  d[itemKey];
        }
      }
      objects.forEach(obj => {
          var key = obj.split('.')[0];
          var nestedKey = obj.split('.')[1];
          if(Array.isArray(d[key])){
            d[key] = d[key].map(i=>i[nestedKey]);
          }else{
            if(d[key] && d[key][nestedKey]){
              d[key]= d[key][nestedKey];
            }
          }
         
        })
    });
   return data
  }

}
