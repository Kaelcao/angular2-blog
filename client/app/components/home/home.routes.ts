import {RouterConfig} from "@angular/router";
import {HomeComponent} from "./home.component";
import {PostDetailComponent} from "../posts/post-detail.component";
import {PostListComponent} from "../posts/post-list.component";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
export const homeRoutes:RouterConfig = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: 'posts/:id', component: PostDetailComponent},
            {path: 'posts', component: PostListComponent},
            {path: 'about', component: AboutComponent},
            {path: 'contact', component: ContactComponent}
        ]
    }
];
