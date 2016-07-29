import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/components/posts/post-detail.component.html'
})
export class PostDetailComponent implements OnInit,OnDestroy {

    private sub:any;
    id:string;

    ngOnInit():any {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this.id = id;
        })
    }

    ngOnDestroy():any {
        this.sub.unsubscribe();
    }

    constructor(private _route:ActivatedRoute) {
    }


}