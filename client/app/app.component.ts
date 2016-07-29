import {Component, AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/auth/login.component";
import {AdminComponent} from "./components/admin/admin.component";
declare var $:JQueryStatic;

@Component({
    selector: 'blog-app',
    directives: [ROUTER_DIRECTIVES],
    precompile: [HomeComponent, LoginComponent,AdminComponent],
    templateUrl: 'app/app.component.html',
    styles: [`
        /*a.active, a.active:hover,a.active:focus {*/
            /*background-color: #e7e7e7!important;*/
        /*}*/
        /*.nav li {*/
            /*cursor: pointer;*/
        /*}*/
    `]
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