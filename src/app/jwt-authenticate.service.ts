import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './loginrespones';
import { Observable } from 'rxjs';
const TOKEN = 'TOKEN';
const NAME='NAME';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticateService {
  url:string="http://Plasmabank-env.eba-fbvbptv4.eu-west-1.elasticbeanstalk.com/";
  //url:string="http://localhost:5000/";

  constructor(private httpClient:HttpClient) { }
  public generateToken(request: any){
    localStorage.setItem(NAME,request.username)
    return this.httpClient.post<string>(this.url+"authenticate", request, {  responseType: 'text' as 'json' });
    
  }
  public admingenerateToken(request: any):Observable<LoginResponse>{
    localStorage.setItem(NAME,request.username)
    return this.httpClient.post<LoginResponse>(this.url+"authenticate", request);
    
  }
  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }
  removeToken(): void{
    
    localStorage.removeItem(TOKEN);
  }
  getToken(): any{
    return localStorage.getItem(TOKEN);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
  getUserName(){
    return localStorage.getItem(NAME)
  }
}
