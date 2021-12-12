import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map, shareReplay } from 'rxjs/operators';
import { DonorRequest } from '../donorRequest';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-donor-request',
  templateUrl: './donor-request.component.html',
  styleUrls: ['./donor-request.component.css']
})
export class DonorRequestComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  selectedFile!: File;
  filename!: string;
  donorRequest: DonorRequest=new DonorRequest("","","","","","",0.00,"")

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
    
    
    let response2=this.service.TestingRegistration(this.selectedFile);
    response2.subscribe((data)=>{
      if(data){
       
        

      }
    },data=>
    {
      alert(data.error.error);
    }
    );
    let response=this.service.doDonorRequest(this.donorRequest);
    response.subscribe((data)=>{
      if(data){
        console.log(data);
        
        this.router.navigate(['donorRequest']);
        alert("You have registered succesfully");
        

      }
    },data=>
    {
      alert(data.error.error);
    }
    );
    
  }


}
