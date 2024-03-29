
// acceptorlogin
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { LoginRequest } from '../login';
import { LoginResponse } from '../loginrespones';

@Component({
  selector: 'app-acceptor-login',
  templateUrl: './acceptor-login.component.html',
  styleUrls: ['./acceptor-login.component.css']
})
export class AcceptorLoginComponent implements OnInit {

  request:LoginRequest=new LoginRequest("","");
  token: any;
  name!: string;
  loginResp:LoginResponse=new LoginResponse("","");

  
  constructor(private jwtAuthenticate:JwtAuthenticateService,private router:Router) { }

  ngOnInit(): void {
  }

  public getAccessToken(){
    let resp =this.jwtAuthenticate.admingenerateToken(this.request);
    
    
    resp.subscribe((data)=> {
      this.loginResp=data
   
      if(this.loginResp.userType== "AC"){
      this.name=this.request.username
         this.jwtAuthenticate.setToken(this.loginResp.token);
        this.router.navigate(['acceptorRequest']);
     }
    else{
      alert("Please Enter valid username and password")
    }
    
    },data=>
    {
      alert("Please Enter valid username and password")
    }
    );
   
  
    
  }

  public isUserLoggedIn():boolean{
    if (this.jwtAuthenticate.getToken()!=null)
        return true;
    else
      return false;
    
  }

  public currentUser():string{
    return this.name
  }

}
