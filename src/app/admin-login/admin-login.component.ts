import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { LoginRequest } from '../login';
import { LoginResponse } from '../loginrespones';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

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
   
      if(this.loginResp.userType== "A"){
      this.name=this.request.username
         this.jwtAuthenticate.setToken(this.loginResp.token);
        this.router.navigate(['donor']);
     }
    else{
      alert(this.loginResp.userType)
      alert("Please Enter valid username and password")
    }
    
    },data=>
    {
      alert("Please Enter valid username and password")
    }
    );
   
   
    
    //this.loginResp=new LoginResponse("","");
    
    
    //
   // resp.subscribe(data:any=>
     // {
       // if(loginResp){
       ///   alert(loginResp.get)
        //  this.name=this.request.username
        //  this.jwtAuthenticate.setToken(data);
        //  this.router.navigate(['admin']);
         // console.log("Form method"+this.jwtAuthenticate.getToken())

       // }
    //  },data=>
      //{
       // alert(data.error.error);
     // }
      //);
    
    
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
