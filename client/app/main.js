"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_routes_1 = require("./app.routes");
var auth_guard_service_1 = require("./services/auth-guard.service");
var auth_service_1 = require("./services/auth.service");
var http_1 = require("@angular/http");
var post_service_1 = require("./services/post.service");
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    app_routes_1.appRouterProviders,
    auth_guard_service_1.AuthGuard,
    auth_service_1.AuthService,
    http_1.HTTP_PROVIDERS,
    post_service_1.PostService
]);
//# sourceMappingURL=main.js.map