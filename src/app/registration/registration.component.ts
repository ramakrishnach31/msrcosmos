import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private reg:RegisterService,private router:Router) { }

  ngOnInit() {
  }

  register(data){
    
    this.reg.getData(data).subscribe((res)=>{
      alert(res["message"])
      if(res["message"]=="Registered successfully"){
        this.router.navigate(['/login'])
      }
    })
  }
}
