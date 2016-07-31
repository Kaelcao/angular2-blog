import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'blog-posts',
    templateUrl: 'app/components/posts/post-list.component.html'
})

export class PostListComponent implements OnInit {
    posts:Post[];
    errorMessage:string;

    constructor(private _postService:PostService, private _router:Router) {
    }

    ngOnInit() {
        this.getPosts();
    }

    private post:Post = {
        _id: "123"
    };


    onSelect(post:Post):boolean {
        this._router.navigate(['posts', post._id]);
        return false;
    }

    getPosts() {
        this._postService.getPosts()
            .subscribe(
                posts => {
                    this.posts = posts;
                    console.log(posts);
                },
                error=>this.errorMessage = error
            );
    }
}