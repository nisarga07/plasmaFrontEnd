
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AcceptorRequest } from '../acceptorRequest';


@Component({
  selector: 'app-acceptor-request',
  templateUrl: './acceptor-request.component.html',
  styleUrls: ['./acceptor-request.component.css']
})
export class AcceptorRequestComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  selectedFile!: File;
  filename!: string;

  acceptorRequest: AcceptorRequest=new AcceptorRequest("","","","","","",0.00,"0",this.filename)

  constructor(private service:UserRegistrationService,private router:Router,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    this.filename=event.target.files[0].name;
    alert( this.filename)
  }
 

  public registerNow(){
    this.acceptorRequest.status="0"
    this.acceptorRequest.fileName=this.filename
    let response2=this.service.TestingRegistration(this.selectedFile);
    response2.subscribe((data)=>{
      if(data){
       
        

      }
    },data=>
    {
      alert(data.error.error);
    }
    );
    
    let response=this.service.doAcceptorRequest(this.acceptorRequest);
    response.subscribe((data)=>{
      if(data){
        console.log(data);
        
        this.router.navigate(['acceptorRequest']);
        alert("You have registered succesfully");
        

      }
    },data=>
    {
      alert(data.error.error);
    }
    );
    
  }

}
