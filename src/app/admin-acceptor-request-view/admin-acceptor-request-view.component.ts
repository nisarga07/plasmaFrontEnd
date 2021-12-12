import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { DonarAcceptorService } from '../donar-acceptor.service';
import { AcceptorRequest } from '../acceptorRequest';

@Component({
  selector: 'app-admin-acceptor-request-view',
  templateUrl: './admin-acceptor-request-view.component.html',
  styleUrls: ['./admin-acceptor-request-view.component.css']
})
export class AdminAcceptorRequestViewComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  name!:any;
  requests!:any;
  message!:any;
  acceptorRequest!: AcceptorRequest;
  
  


  constructor(private jwt:JwtAuthenticateService,private acceptor:DonarAcceptorService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    
    let resp=this.acceptor.getAllAcceptorRequest()
     resp.subscribe((data)=>this.requests=data);
  }
  public onAcceptRequest(request:any){
    request.status=1
    this.acceptorRequest=new AcceptorRequest(request.id,request.username,request.patientName,request.patientAge,request.reason,request.bloodGroup,request.units,request.status,request.fileName)
    let resp=this.acceptor.onAcceptOrRejectOfAcceptorRequests(request)
    resp.subscribe((data)=>this.message=data);
    
  }
  public onRejectRequest(request:any){
    request.status=2
    this.acceptorRequest=new AcceptorRequest(request.id,request.username,request.patientName,request.patientAge,request.reason,request.bloodGroup,request.units,request.status,request.fileName)
    let resp=this.acceptor.onAcceptOrRejectOfAcceptorRequests(request)
    resp.subscribe((data)=>this.message=data);
    
  }
  public download(fileName:any){
    window.open('https://bloodbankstorage.s3-eu-west-1.amazonaws.com/'+fileName);
  }

}
