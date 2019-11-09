import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {

  constructor(private hc:HttpClient) { }

  //method for getting data from backend
  getDataFromApi():Observable<any>
  {
    return this.hc.get('main/userdata')
  }

  //method for updating data at backend

  updateData(data):Observable<any>
  {
    return this.hc.put('main/updateuser',data)
  }

  //method for deleting data

  toDeleteData(data):Observable<any>
  {
    return this.hc.delete(`main/delete/${data}`)
    
  }
}
