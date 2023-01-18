import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app/app.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header/header.component';
import {appRoutes} from './app.routes';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './components/modal/modal/modal.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {ErrorInterceptor} from './interceptors/error/error.interceptor';
import {ErrorForbiddenComponent} from './components/pages/errors/error-forbidden/error-forbidden.component';
import {ErrorNotFoundComponent} from './components/pages/errors/error-not-found/error-not-found.component';
import {RegistrationComponent} from './components/pages/users/registration/registration.component';
import {LoginComponent} from './components/pages/users/login/login.component';
import {HomeComponent} from './components/pages/home/home.component';
import {ProfileComponent} from './components/pages/users/profile/profile.component';
import {CookieService} from 'ngx-cookie-service';
import {PasswordResetComponent} from './components/pages/users/password-reset/password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ModalComponent,
    ErrorForbiddenComponent,
    ErrorNotFoundComponent,
    PasswordResetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    RouterModule.forRoot(appRoutes),
    RouterOutlet,
    RouterLink,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
/**
 * Default AppModule
 */
export class AppModule {
}
