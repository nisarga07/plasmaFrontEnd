import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { LoginRequest } from '../login';
import { LoginResponse } from '../loginrespones';

@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.css']
})
export class DonorLoginComponent implements OnInit {

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
      
      if(this.loginResp.userType== "D"){
      this.name=this.request.username
         this.jwtAuthenticate.setToken(this.loginResp.token);
        this.router.navigate(['donorRequest']);
     }
    else{
      alert("Please Enter valid username and password")
    }
    
    },data=>
    {
      alert("Please Enter valid username and password")
    }
    );

    



   /*  let resp=this.jwtAuthenticate.generateToken(this.request);
    resp.subscribe(data=>
      {
        if(data){
          console.log(data);
          this.name=this.request.username
          this.jwtAuthenticate.setToken(data);
          this.router.navigate(['donorRequest']);
          console.log("Form method"+this.jwtAuthenticate.getToken())

        }
      },data=>
      {
        alert(data.error.error);
      }
      ); */
    
    
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
