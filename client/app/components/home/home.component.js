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
var post_list_component_1 = require("../posts/post-list.component");
var right_panel_component_1 = require("../rightPanels/right-panel.component");
var router_1 = require("@angular/router");
var about_component_1 = require("../about/about.component");
var contact_component_1 = require("../contact/contact.component");
var auth_service_1 = require("../../services/auth.service");
var HomeComponent = (function () {
    function HomeComponent(_authService) {
        this._authService = _authService;
        this.pageTitle = "Blog";
        this.isLoggedIn = _authService.loggedIn;
        this.username = localStorage.getItem('username');
    }
    HomeComponent.prototype.logout = function () {
        this._authService.logout();
        this.isLoggedIn = false;
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            precompile: [post_list_component_1.PostListComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent],
            directives: [post_list_component_1.PostListComponent, right_panel_component_1.RightPanelComponent, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/components/home/home.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map