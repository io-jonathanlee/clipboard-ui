import {Routes} from '@angular/router';
import {ProfileComponent} from './components/pages/users/profile/profile/profile.component';
import {RegistrationComponent} from './components/pages/users/registration/registration/registration.component';
import {LoginComponent} from './components/pages/users/login/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './components/pages/home/home/home.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];
