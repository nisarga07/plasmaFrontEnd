import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { LoginRequest } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  request:LoginRequest=new LoginRequest("","");
  token: any;
  name!: string;

  constructor(private jwtAuthenticate:JwtAuthenticateService,private router:Router) { }

  ngOnInit(): void {
    
  }
  

  public getAccessToken(){
    let resp=this.jwtAuthenticate.generateToken(this.request);
    alert(resp)
    resp.subscribe(data=>
      {
        if(data){
          console.log(data);
          this.name=this.request.username
          this.jwtAuthenticate.setToken(data);
          this.router.navigate(['acceptorRequest']);
          console.log("Form method"+this.jwtAuthenticate.getToken())

        }
      },data=>
      {
        alert(data.error.error);
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
