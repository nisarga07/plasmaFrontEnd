
import { Component, OnInit } from '@angular/core';
import { DonarAcceptorService } from '../donar-acceptor.service';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { Observable } from 'rxjs';
import { DonorRequest } from '../donorRequest';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-admin-donor-request-view',
  templateUrl: './admin-donor-request-view.component.html',
  styleUrls: ['./admin-donor-request-view.component.css']
})
export class AdminDonorRequestViewComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  name!:any;
  requests!:any;
  message!:any;
  donorRequest!: DonorRequest;

  constructor(private jwt:JwtAuthenticateService,private donor:DonarAcceptorService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    let resp=this.donor.getAllDonorRequest()
     resp.subscribe((data)=>this.requests=data);
  }
  public onAcceptRequest(request:any){
    request.status=1
    alert(request.id);
    this.donorRequest=new DonorRequest(request.id,request.username,request.patientName,request.patientAge,request.reason,request.bloodGroup,request.units,request.status)
    alert(this.donorRequest.id)
    let resp=this.donor.onAcceptOrRejectOfDonorRequests(request)
    resp.subscribe((data)=>this.message=data);
    
  }
  public onRejectRequest(request:any){
    request.status=2
    this.donorRequest=new DonorRequest(request.id,request.username,request.patientName,request.patientAge,request.reason,request.bloodGroup,request.units,request.status)
    let resp=this.donor.onAcceptOrRejectOfDonorRequests(this.donorRequest)
    resp.subscribe((data)=>this.message=data);
    
  }
  public download(fileName:any){
    window.open('https://bloodbankstorage.s3-eu-west-1.amazonaws.com/'+fileName);
  }

}
