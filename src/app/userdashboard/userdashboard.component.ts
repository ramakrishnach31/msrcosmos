import { Component, OnInit } from '@angular/core';
import { UserdashboardService } from '../userdashboard.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  users:any[]=[];

  deletedData:any;
  
  
b: boolean = false

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
    onSubmit(data){
      this.b=false;
      this.userdb.updateData(data).subscribe((res)=>{
        alert(res['message'])
      })
     
    }

    //method for deleting document

    toDelete(email){
      this.userdb.toDeleteData(email).subscribe((res)=>{
        alert(res['message'])
        // this.users=res['data']
      })
      this.hc.get('main/userdata').subscribe((res)=>{
        this.users=res['data']
      })
    }
}


