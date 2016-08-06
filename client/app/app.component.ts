import {Component, AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AuthComponent} from "./components/auth/auth.component";
import {AdminComponent} from "./components/admin/admin.component";
import './rxjs-operators';
declare var $:JQueryStatic;

@Component({
    selector: 'blog-app',
    directives: [ROUTER_DIRECTIVES],
    precompile: [HomeComponent, AuthComponent, AdminComponent],
    templateUrl: 'app/app.component.html',
})
export class AppComponent implements AfterViewInit {
    pageTitle:string = "Blog";

    ngAfterViewInit():any {
        $('.nav li a').click(function () {
            console.log('clicked');
            //noinspection TypeScriptUnresolvedFunction
            (<any>$(".navbar-collapse")).collapse('hide');
        });
    }
}