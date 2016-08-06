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
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("@angular/router");
var EmailValidator_1 = require('../../utils/validators/EmailValidator');
var forms_1 = require("@angular/forms");
var AuthComponent = (function () {
    function AuthComponent(_authService, _router, _formBuilder) {
        this._authService = _authService;
        this._router = _router;
        this.user = {
            email: '',
            password: ''
        };
        this.email = new forms_1.FormControl("", [forms_1.Validators.required, EmailValidator_1.EmailValidator.emailInvalid]);
        this.password = new forms_1.FormControl("", [forms_1.Validators.required]);
        this.loginForm = _formBuilder.group({
            "email": this.email,
            "password": this.password
        });
    }
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message = "Logging in...";
        this.error = '';
        this._authService.login(this.user.email, this.user.password).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this._router.navigate(['posts']);
            }
            _this.message = "";
        }, function (error) {
            _this.error = error.message;
            _this.message = '';
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/auth/auth.component.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, forms_1.FormBuilder])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map