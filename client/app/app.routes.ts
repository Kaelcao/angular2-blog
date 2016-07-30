import {RouterConfig, provideRouter} from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {homeRoutes} from "./components/home/home.routes";
import {AdminComponent} from "./components/admin/admin.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes:RouterConfig = [
    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    },
    ...homeRoutes,
    {path: 'login', component: AuthComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
];

export const appRouterProviders = [
    provideRouter(routes)
];