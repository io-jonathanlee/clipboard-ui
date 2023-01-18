import {Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './components/pages/home/home.component';
import {RegistrationComponent} from './components/pages/users/registration/registration.component';
import {LoginComponent} from './components/pages/users/login/login.component';
import {ProfileComponent} from './components/pages/users/profile/profile.component';
import {ErrorNotFoundComponent} from './components/pages/errors/error-not-found/error-not-found.component';
import {ErrorForbiddenComponent} from './components/pages/errors/error-forbidden/error-forbidden.component';
import {PasswordResetComponent} from './components/pages/users/password-reset/password-reset.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'password/reset', component: PasswordResetComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'error/not-found', component: ErrorNotFoundComponent},
  {path: 'error/forbidden', component: ErrorForbiddenComponent},
];
