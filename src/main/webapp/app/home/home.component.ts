import { Component, OnInit } from '@angular/core';
import {Post, PostService} from "../entities/post";
import {ResponseWrapper} from "../shared";

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postService: PostService){

    }

    ngOnInit(){
        console.log('ngOnInit...');
        this.loadAll();
    }

    loadAll() {
        this.postService.query().subscribe(
            (res: ResponseWrapper) => {
                console.log(res.json);
                this.posts = res.json;
            },
            (res: ResponseWrapper) => {
                console.log(res.json);
            }
        );
    }
}
