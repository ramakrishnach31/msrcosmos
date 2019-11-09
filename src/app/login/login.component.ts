import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService,private router:Router) { }

  ngOnInit() {
  }

  toLogin(data){
    this.login.getLoginData(data).subscribe((res)=>{
      alert(res["message"])
      if(res["message"]=="Loggin success"){
        this.router.navigate(['/userdashboard'])
      }
    })
  }

}
