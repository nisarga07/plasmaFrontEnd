import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthenticateService } from './jwt-authenticate.service';
import {  HttpHeaders } from '@angular/common/http';
import { UserRegistrationService } from './user-registration.service';
import { DonationRequest } from './donationRequest';

@Injectable({
  providedIn: 'root'
})
export class DonarAcceptorService {
 url:string="http://Plasmabank-env.eba-fbvbptv4.eu-west-1.elasticbeanstalk.com/";
 //url:string="http://localhost:5000/";

  constructor(private http:HttpClient,private jwtService:JwtAuthenticateService) { 
    
  }
  public getAllAcceptors(){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getAllAcceptors",{headers});
  }
  public getUserByBlood(group:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getAcceptor/"+group,{headers});
  }
  public getAllDonors(){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getAllDonors",{headers});
  }
  public getDonorByBlood(group:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getDonor/"+group,{headers});
  }
  public getDonorRequestByUsername(username:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getDonorRequestByName/"+username,{headers});
  }
  public getDonationRequestByUsername(username:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getDonationRequestByName/"+username,{headers});
  }
  public getAcceptorRequestByUsername(username:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getAcceptorRequestByName/"+username,{headers});
  }
  public getAllAcceptorRequest(){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getAllAcceptorsRequests",{headers});
  }
  public getAllDonorRequest(){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getAllDonorsRequest",{headers});
  }
  public getAllDonationRequest(){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+"getAllDonations",{headers});
  }

  public sendMail(mailInfo:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post(this.url+"sendToDonor"+mailInfo,{headers},{responseType: 'text' as 'json' });
  }

  public onDeleteAcceptor(id:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(this.url+"deleteAcceptor/"+id,{headers});
   
  }
  public onDeleteDonor(id:any){
    
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(this.url+"deleteDonor/"+id,{headers});
   
  }
  public onAcceptOrRejectOfAcceptorRequests(request:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put(this.url+"updtaeAcceptorRequest",request,{headers});
   
  }
  public onAcceptOrRejectOfDonorRequests(request:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put(this.url+"updateDonorRequest",request,{headers});
   
  }
  public onAcceptOrRejectOfDonotionsRequests(request:DonationRequest){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put(this.url+"updateDonationRequest",request,{headers});
   
  }
  
  
}
