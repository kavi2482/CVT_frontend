import { Component } from '@angular/core';
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
  selector: 'app-signup',
  standalone: true,
  imports: [MatToolbarModule,MatCardModule,MatInputModule,FormsModule,MatButtonModule,MatFormFieldModule,MatProgressSpinnerModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = '';
  employeeId: any =null;
  email: string = '';
  role: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  signupResponse:any

  constructor(private loginservice:LoginService,private route:Router){}
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

 
  async onSubmit() {
    console.log('Within onsubmit')
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      console.log(this.errorMessage);
      return;
    }

    // Example validation logic
    if (this.name && this.employeeId && this.email && this.role && this.password) {
      this.errorMessage = null;
      //alert('Sign Up Successful!');
      // Perform sign-up logic here (e.g., call a service to handle the signup)
      this.signupResponse=await this.loginservice.createUser(this.name , this.employeeId , this.email , this.role ,this.password);
      if (this.signupResponse.includes('account created successfully')){  
          this.successMessage='Account Created.Redirecting to login page...';
          setTimeout(() => {
            this.route.navigate(['/login'])
          }, 2000); 
          
      }
      else{
        this.errorMessage= this.signupResponse;
      }
    } else {
      this.errorMessage = 'Please fill out all required fields';
    }
  }
}