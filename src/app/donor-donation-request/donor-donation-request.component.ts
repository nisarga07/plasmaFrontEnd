import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';
import { DonationRequest } from '../donationRequest';
@Component({
  selector: 'app-donor-donation-request',
  templateUrl: './donor-donation-request.component.html',
  styleUrls: ['./donor-donation-request.component.css']
})
export class DonorDonationRequestComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  donationRequest: DonationRequest=new DonationRequest("","","",0.0,"","","0")

  constructor(private service:UserRegistrationService,private router:Router,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  public registerNow(){
    this.donationRequest.status="0"
    let response=this.service.doDonationRequest(this.donationRequest);
    response.subscribe((data)=>{
      if(data){
        console.log(data);
        
        this.router.navigate(['donorRequest']);
        alert("Donation request has done succeesfully ");
        

      }
    },data=>
    {
      alert(data.error.error);
    }
    );
    
  }
}
