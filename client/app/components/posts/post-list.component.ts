import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Post} from "../../models/post";

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'blog-posts',
    templateUrl: 'app/components/posts/post-list.component.html'
})

export class PostListComponent {
    private post:Post = {
        _id: "123"
    };

    constructor(private _router:Router) {
    }

    onSelect(post:Post):boolean {
        this._router.navigate(['posts', post._id]);
        return false;
    }

}