"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./components/auth/login.component");
var home_routes_1 = require("./components/home/home.routes");
var admin_component_1 = require("./components/admin/admin.component");
var auth_guard_service_1 = require("./services/auth-guard.service");
var routes = [
    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    }
].concat(home_routes_1.homeRoutes, [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [auth_guard_service_1.AuthGuard] },
]);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map