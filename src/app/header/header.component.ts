import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticateService } from '../jwt-authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLog!: boolean;

  constructor(private jwtAuthenticate:JwtAuthenticateService,private router:Router) { }

  ngOnInit(): void {
  }
  public logoutUser(){
    this.jwtAuthenticate.removeToken();
    this.router.navigate(['login']);
  }
  public redirectToLogin(){
    this.router.navigate(['register']);
  }
  public isUserLoggedIn():boolean{
    if (this.jwtAuthenticate.getToken()!=null){
      this.isUserLog!=true;
      console.log(this.jwtAuthenticate.getToken());
        return true;

    }
        
    else{
      this.isUserLog!=false;
      console.log(this.jwtAuthenticate.getToken());
      return false;

    }
      
    
  }

}
