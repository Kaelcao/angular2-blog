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
var router_1 = require("@angular/router");
var post_service_1 = require("../../services/post.service");
var PostListComponent = (function () {
    function PostListComponent(_postService, _router) {
        this._postService = _postService;
        this._router = _router;
        this.post = {
            _id: "123"
        };
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostListComponent.prototype.onSelect = function (post) {
        this._router.navigate(['posts', post._id]);
        return false;
    };
    PostListComponent.prototype.getPosts = function () {
        var _this = this;
        this._postService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
            console.log(posts);
        }, function (error) { return _this.errorMessage = error; });
    };
    PostListComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES],
            selector: 'blog-posts',
            templateUrl: 'app/components/posts/post-list.component.html'
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.Router])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map