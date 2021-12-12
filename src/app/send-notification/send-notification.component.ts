import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerModel } from '../MessengerModel';
import { UserRegistrationService } from '../user-registration.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  messengerRequest: MessengerModel=new MessengerModel("","")
  
  message: any;
  
  constructor(private service:UserRegistrationService,private router:Router,private breakpointObserver: BreakpointObserver ) { 
   
  }

  ngOnInit(): void {
  }

  public sendNow(){
    let response=this.service.sendNotifactionMessages(this.messengerRequest)
    response.subscribe((data)=>{
      if(data){
        
        
       
        alert("You have send message succesful");
        

      }
    },data=>
    {
      alert(data.error.error);
    }
    );
    
  }

}
