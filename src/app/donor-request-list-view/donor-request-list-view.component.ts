import { Component, OnInit } from '@angular/core';
import { DonarAcceptorService } from '../donar-acceptor.service';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { LoginComponent } from '../login/login.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-donor-request-list-view',
  templateUrl: './donor-request-list-view.component.html',
  styleUrls: ['./donor-request-list-view.component.css']
})
export class DonorRequestListViewComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private jwt:JwtAuthenticateService,private donor:DonarAcceptorService,private breakpointObserver: BreakpointObserver,private user:UserRegistrationService) { }

  name!:any;
  requests!:any;

  ngOnInit(): void {
   this.name=this.jwt.getUserName()
   let resp=this.donor.getDonorRequestByUsername(this.name)
    resp.subscribe((data)=>this.requests=data);
   
  }

  public download(fileName:any){
    window.open('https://bloodbankstorage.s3-eu-west-1.amazonaws.com/'+fileName);
  }



}
