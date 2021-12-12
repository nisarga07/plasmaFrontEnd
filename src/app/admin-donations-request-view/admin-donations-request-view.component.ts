import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DonationRequest } from '../donationRequest';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { DonarAcceptorService } from '../donar-acceptor.service';

@Component({
  selector: 'app-admin-donations-request-view',
  templateUrl: './admin-donations-request-view.component.html',
  styleUrls: ['./admin-donations-request-view.component.css']
})
export class AdminDonationsRequestViewComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  name!:any;
  requests!:any;
  message!:any;
  donationRequest!: DonationRequest;

  constructor(private jwt:JwtAuthenticateService,private donor:DonarAcceptorService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    let resp=this.donor.getAllDonationRequest()
     resp.subscribe((data)=>this.requests=data);
  }
  public onAcceptRequest(request:any){
    request.status=1

    alert(request.id);
    
    this.donationRequest=new DonationRequest(request.id,request.username,request.bloodGroup,request.units,request.disease,request.age,request.status)
   
    let resp=this.donor.onAcceptOrRejectOfDonotionsRequests(request)
    resp.subscribe((data)=>this.message=data);
    
  }
  public onRejectRequest(request:any){
    request.status=2
    this.donationRequest=new DonationRequest(request.id,request.username,request.bloodGroup,request.units,request.disease,request.age,request.status)
    let resp=this.donor.onAcceptOrRejectOfDonotionsRequests(request)
    resp.subscribe((data)=>this.message=data);
    
  }
}
