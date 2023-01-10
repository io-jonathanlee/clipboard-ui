import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * AuthGuard.
 */
export class AuthGuard implements CanActivate {
  /**
   * Standard canActivate method.
   * @param {ActivatedRouteSnapshot} route route
   * @param {RouterStateSnapshot} state state
   * @return {boolean} whether the request should be processed
   */
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
