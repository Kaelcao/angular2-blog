"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var auth_component_1 = require("./components/auth/auth.component");
var admin_component_1 = require("./components/admin/admin.component");
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Blog";
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        $('.nav li a').click(function () {
            console.log('clicked');
            //noinspection TypeScriptUnresolvedFunction
            $(".navbar-collapse").collapse('hide');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'blog-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [home_component_1.HomeComponent, auth_component_1.AuthComponent, admin_component_1.AdminComponent],
            templateUrl: 'app/app.component.html',
            styles: ["\n        /*a.active, a.active:hover,a.active:focus {*/\n            /*background-color: #e7e7e7!important;*/\n        /*}*/\n        /*.nav li {*/\n            /*cursor: pointer;*/\n        /*}*/\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map