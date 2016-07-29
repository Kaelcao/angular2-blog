import {Component} from '@angular/core';
import {PostListComponent} from "../posts/post-list.component";
import {RightPanelComponent} from "../rightPanels/right-panel.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
    selector: 'home',
    precompile:[PostListComponent,AboutComponent,ContactComponent],
    directives: [PostListComponent, RightPanelComponent, ROUTER_DIRECTIVES],
    templateUrl: 'app/components/home/home.component.html'
})
export class HomeComponent {
    pageTitle:string = "Blog"
}