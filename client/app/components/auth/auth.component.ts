import {Component} from'@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
@Component({
    templateUrl: 'auth.component.html'
})

export class AuthComponent {
    message:string;
    token:string;


    constructor(public authService:AuthService, public router:Router) {
        this.setMessage();
        this.token = localStorage.getItem('token');
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                this.token = 'token';
                localStorage.setItem('token', this.token);
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}