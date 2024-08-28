
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginService } from '../service/login.service';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule,MatCardModule,MatInputModule,FormsModule,MatButtonModule,MatFormFieldModule,MatProgressSpinnerModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl:'./login.component.css',
})
export class LoginComponent {
  username: any=undefined;
  password: string = '';
  errorMessage: string | null = null;
  loginResponse: any=undefined;
 
 constructor(private loginservice:LoginService,private route:Router){

 }

  async onSubmit() {
     console.log(this.username);
     console.log(this.password);
     if(this.username && this.password)
     {    
          console.log("Within if");
          this.loginResponse=   await this.loginservice.validateUser(this.username,this.password)
          if (this.loginResponse.includes('successfully login'))
          {
            this.errorMessage=null;
            this.route.navigate(['/home'])
          }
          else 
          {
            this.errorMessage = 'Invalid username or password';
          }
     }
  else{
          console.log("Within else")
          this.errorMessage = 'Username and Password is mandatory';
      }
   }
  
  }