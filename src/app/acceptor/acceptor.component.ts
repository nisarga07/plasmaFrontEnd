import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DonarAcceptorService } from '../donar-acceptor.service';
import { Mail } from '../mail';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-acceptor',
  templateUrl: './acceptor.component.html',
  styleUrls: ['./acceptor.component.css']
})
export class AcceptorComponent implements OnInit {
  users:any;
  bloodGroup!:string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
  
  @ViewChild("reciverEMmail")
  reciverEMmail!: ElementRef;

  mailInfo:Mail=new Mail("","","","","");

  constructor(private accpetor:DonarAcceptorService,private router:Router,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    let resp=this.accpetor.getAllAcceptors();
    resp.subscribe((data)=>this.users=data);
  }

  public getAcceptorByBloodGroup(){
    let resp= this.accpetor.getUserByBlood(this.bloodGroup);
    resp.subscribe((data)=>this.users=data);
  }
  public onDeleteAcceptor(user:any){
    
    let resp=this.accpetor.onDeleteAcceptor(user.id);
    resp.subscribe((data)=>this.users=data);

   
   
   }
 

}
