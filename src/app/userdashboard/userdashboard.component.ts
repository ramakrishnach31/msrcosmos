import { Component, OnInit } from '@angular/core';
import { UserdashboardService } from '../userdashboard.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  users:any;
  b: boolean = false
  id:any;
  constructor(private userdb:UserdashboardService,private hc:HttpClient) { }

  ngOnInit() {
    this.userdb.getDataFromApi().subscribe((res)=>{
      this.users=res['message']
    })
  }
  //method for edit
  onEdit(user){
    
    this.b = true;
    }

    //method for updating data
    updateData(data){
      this.b=false;
      this.hc.put('main/updateuser',data).subscribe((res)=>{
        alert(res['message'])
        this.users=res['data']
      })
     
    }

    //method for deleting document
    toDelete(id){
     this.hc.delete(`main/delete/${id}`).subscribe((res)=>{
       alert(res['message'])
       this.users=res['data']
     })
    }
}


