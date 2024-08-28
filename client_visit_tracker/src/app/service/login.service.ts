import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   loginResponse:any;
   createUserResponse:any;
   constructor(private httpClient: HttpClient) {}
  async validateUser(username:any,password:any){
    const body={
      "empId": username,
      "password": password
    }


    this.loginResponse=this.httpClient.post('http://localhost:8081/api/login', body,{responseType: 'text'}).toPromise();
    return this.loginResponse
    
  }

  async createUser(name:string , employeeId:number , email:string , role:string ,password:string){
   
    const body=
      {
        "empId": employeeId,
        "password": password,
        "name": name,
        "role": role,
        "emailId": email
       }

    
    this.createUserResponse=this.httpClient.post('http://localhost:8081/api/signup', body,{responseType: 'text'}).toPromise();
    return this.createUserResponse
  }

  async timeout()  {
    await setTimeout(() => {
      console.log("Delayed for 2 seconds.");
    },2000); 

  }

}
