import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css']
})
export class RootNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    isUserLog!: boolean;

   

  constructor(private breakpointObserver: BreakpointObserver,private jwtAuthenticate: JwtAuthenticateService,private router:Router) {}

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
  public logoutUser(){
    this.jwtAuthenticate.removeToken();
    this.router.navigate(['login']);
  }

  public redirectToLogin(){
    this.router.navigate(['register']);
  }

}
