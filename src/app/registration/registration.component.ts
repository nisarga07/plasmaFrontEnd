import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sample } from 'rxjs/operators';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  image: any = null;

  user: User=new User("","","","","","","");
  
  message: any;
  selectedFile!: File;
  filename: any;
  
  constructor(private service:UserRegistrationService,private router:Router ) { 
   
  }
  

  ngOnInit(): void {
  }

  public registerNow(){
    console.log(this.filename)
    
    let response=this.service.doRegistration(this.user);
    response.subscribe((data)=>{
      if(data){
        console.log(data);
        
        this.router.navigate(['login']);
        alert("You have registered succesfully");
        

      }
    },data=>
    {
      alert(data.error.error);
    }
    );
    
  }


}
