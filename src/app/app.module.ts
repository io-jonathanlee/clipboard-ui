import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app/app.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header/header.component';
import {ProfileComponent} from './components/pages/users/profile/profile/profile.component';
import {appRoutes} from './app.routes';
import {RegistrationComponent} from './components/pages/users/registration/registration/registration.component';
import {LoginComponent} from './components/pages/users/login/login/login.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './components/pages/home/home/home.component';
import {ModalComponent} from './components/modal/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    RouterOutlet,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
/**
 * Default AppModule
 */
export class AppModule {
}
