import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { DonarAcceptorService } from '../donar-acceptor.service';

@Component({
  selector: 'app-donor-donation-request-view',
  templateUrl: './donor-donation-request-view.component.html',
  styleUrls: ['./donor-donation-request-view.component.css']
})
export class DonorDonationRequestViewComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private jwt:JwtAuthenticateService,private donor:DonarAcceptorService,private breakpointObserver: BreakpointObserver) { }

  name!:any;
  requests!:any;

  ngOnInit(): void {
   this.name=this.jwt.getUserName()
   let resp=this.donor.getDonationRequestByUsername(this.name)
    resp.subscribe((data)=>this.requests=data);
   
  }

}
