import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtAuthenticateService } from '../jwt-authenticate.service';
import { DonarAcceptorService } from '../donar-acceptor.service';


@Component({
  selector: 'app-acceptor-request-list-view',
  templateUrl: './acceptor-request-list-view.component.html',
  styleUrls: ['./acceptor-request-list-view.component.css']
})
export class AcceptorRequestListViewComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  name!:any;
  requests!:any;
  

  


  constructor(private jwt:JwtAuthenticateService,private acceptor:DonarAcceptorService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
   
    this.name=this.jwt.getUserName()
    let resp=this.acceptor.getAcceptorRequestByUsername(this.name)
     resp.subscribe((data)=>this.requests=data);
  }
  public download(fileName:any){
    window.open('https://bloodbankstorage.s3-eu-west-1.amazonaws.com/'+fileName);
  }

  

}
