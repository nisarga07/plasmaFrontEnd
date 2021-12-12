import { Component } from '@angular/core';
import { JwtAuthenticateService } from './jwt-authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlasmaDonationProject';
  isUserLog!: boolean;
  constructor(private jwtAuthenticate:JwtAuthenticateService) { }

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
