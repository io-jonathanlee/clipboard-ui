import {Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './components/pages/home/home.component';
import {RegistrationComponent} from './components/pages/users/registration/registration.component';
import {LoginComponent} from './components/pages/users/login/login.component';
import {ProfileComponent} from './components/pages/users/profile/profile.component';
import {ErrorNotFoundComponent} from './components/pages/errors/error-not-found/error-not-found.component';
import {ErrorForbiddenComponent} from './components/pages/errors/error-forbidden/error-forbidden.component';
import {PasswordResetComponent} from './components/pages/users/password-reset/password-reset.component';
import {RegisterConfirmComponent} from './components/pages/users/register-confirm/register-confirm.component';
import {
  ViewOrganizationsWhereMemberComponent,
} from './components/pages/organizations/view-organizations-where-member/view-organizations-where-member.component';
import {
  ViewOrganizationComponent,
} from './components/pages/organizations/view-organization/view-organization.component';
import {ViewDeliveriesComponent} from './components/pages/deliveries/view-deliveries/view-deliveries.component';
import {LandingPageComponent} from './components/pages/landing-page/landing-page.component';
import {AdminPanelComponent} from './components/pages/admin-panel/admin-panel.component';

export const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register/confirm/:tokenValue', component: RegisterConfirmComponent},
  {path: 'password/reset', component: PasswordResetComponent},
  {path: 'organizations/memberships', component: ViewOrganizationsWhereMemberComponent, canActivate: [AuthGuard]},
  {path: 'organizations/view', component: ViewOrganizationComponent, canActivate: [AuthGuard]},
  {path: 'deliveries', component: ViewDeliveriesComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuard]},
  {path: 'error/not-found', component: ErrorNotFoundComponent},
  {path: 'error/forbidden', component: ErrorForbiddenComponent},
];
