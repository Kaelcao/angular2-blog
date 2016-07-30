"use strict";
var router_1 = require('@angular/router');
var auth_component_1 = require("./components/auth/auth.component");
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
    { path: 'login', component: auth_component_1.AuthComponent },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [auth_guard_service_1.AuthGuard] },
]);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map