import { Routes } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddClientVisitDetailsComponent } from './add-client-visit-details/add-client-visit-details.component';
export const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'add',
    component:AddClientVisitDetailsComponent
  }
];
