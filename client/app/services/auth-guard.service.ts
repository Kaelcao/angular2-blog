import {Injectable} from "@angular/core";
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
        if (this._authService.loggedIn) {
            var id_token = localStorage.getItem('id_token');
            var payload = JSON.parse(atob(id_token.split('.')[1]));
            var exp = new Date(payload.exp * 1000);
            var today = new Date();
            if (exp < today) {
                this._authService.logout();
                return false;
            }
            return true;
        }

        // Store the attempted URL for redirecting
        this._authService.redirectUrl = state.url;

        // Navigate to the login page
        this._router.navigate(['/login']);
        return false;
    }


}