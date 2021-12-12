import { Component, OnInit } from '@angular/core';
import { DonarAcceptorService } from '../donar-acceptor.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  users:any;
  bloodGroup!:string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(private donor:DonarAcceptorService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    let resp=this.donor.getAllDonors();
    resp.subscribe((data)=>this.users=data);
  }
  public getDonorByBloodGroup(){
    let resp= this.donor.getDonorByBlood(this.bloodGroup);
    resp.subscribe((data)=>this.users=data);
  }

  public onDeleteDonor(user:any){
    
    let resp=this.donor.onDeleteDonor(user.id);
    resp.subscribe((data)=>this.users=data);

   
   
   }

}
