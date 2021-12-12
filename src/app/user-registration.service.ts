import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { JwtAuthenticateService } from './jwt-authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
url:string="http://Plasmabank-env.eba-fbvbptv4.eu-west-1.elasticbeanstalk.com/";
//url:string="http://localhost:5000/";

  constructor(private http:HttpClient,private jwtService:JwtAuthenticateService) { }

  public doRegistration(user:any){
          return this.http.post(this.url+"register",user);
  }
  public TestingRegistration(file: File){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', file);
    return this.http.post(this.url+"upload",uploadImageData,{responseType:'text' as 'json'});
}
  public download(fileName: string | undefined): Observable<Blob> {
  return this.http.get(this.url+"download/"+fileName, {
    responseType: 'blob'
  });
}
  public doDonorRequest(user:any){
    let tokenStr='Bearer '+this.jwtService.getToken();
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post(this.url+"addDonorRequest",user,{responseType:'text' as 'json'});
}
public doDonationRequest(user:any){
  let tokenStr='Bearer '+this.jwtService.getToken();
  const headers = new HttpHeaders().set('Authorization', tokenStr);
  return this.http.post(this.url+"addDonation",user,{responseType:'text' as 'json'});
}
public doAcceptorRequest(user:any){
  let tokenStr='Bearer '+this.jwtService.getToken();
  const headers = new HttpHeaders().set('Authorization', tokenStr);
  return this.http.post(this.url+"addAcceptorRequest",user,{responseType:'text' as 'json'});
}
public sendNotifactionMessages(msg:any){
  let tokenStr='Bearer '+this.jwtService.getToken();
  const headers = new HttpHeaders().set('Authorization', tokenStr);
  return this.http.post(this.url+"sendNotifcation",msg,{responseType:'text' as 'json'});
}
}
