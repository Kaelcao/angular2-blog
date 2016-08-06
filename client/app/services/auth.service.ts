import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class AuthService {
    loggedIn: boolean = false;

    redirectUrl: string;

    constructor(private _http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this._http
            .post(
                '/api/login',
                JSON.stringify({email, password}),
                options
            )
            .map(res => res.json())
            .map((res) => {

                localStorage.setItem('auth_token', res.token);
                this.loggedIn = true;
                return this.loggedIn;

            }).catch(function (error: any) {
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }
}
