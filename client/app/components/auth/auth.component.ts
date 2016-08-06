import {Component} from'@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {EmailValidator} from '../../utils/validators/EmailValidator';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
@Component({
    templateUrl: 'app/components/auth/auth.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class AuthComponent {
    user = {
        email: '',
        password: ''
    };

    message: string;
    token: string;
    error: string;

    loginForm: FormGroup;
    email: FormControl;
    password: FormControl;

    constructor(public _authService: AuthService, public _router: Router, _formBuilder: FormBuilder) {
        this.email = new FormControl("", [Validators.required, EmailValidator.emailInvalid]);
        this.password = new FormControl("", [Validators.required]);
        this.loginForm = _formBuilder.group({
            "email": this.email,
            "password": this.password
        });
    }

    onSubmit() {
        this.message = "Logging in...";
        this.error = '';
        this._authService.login(this.user.email, this.user.password).subscribe(
            result => {
                console.log(result);
                if (result) {
                    this._router.navigate(['posts']);
                }
                this.message = "";
            },
            error => {
                this.error = error.message;
                this.message = '';
            }
        );

    }

    // this.message = 'Trying to log in ...';
    // this.authService.login().subscribe(() => {
    //     this.setMessage();
    //     if (this.authService.isLoggedIn) {
    //         this.token = 'token';
    //         localStorage.setItem('token', this.token);
    //         // Get the redirect URL from our auth service
    //         // If no redirect has been set, use the default
    //         let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
    //         // Redirect the user
    //         this.router.navigate([redirect]);
    //     }
    // });

}