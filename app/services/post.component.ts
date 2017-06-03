import {Component} from '@angular/core';
 import {PostService} from './post.service';

 @Component({
 	selector :'post-service',
 	template : 
 	          `
 	          <div class="container">
 	           <h4>My Blog Post</h4>
 	           <br>
	 	           <div>
	 	                <label>Title:</label>
	 	                
	 	                <input class="form-control" type ="text" 
	 	                               [(ngModel)]="title"/><br>
	 	                
	 	                <label>Body:</label>
	 	                
	 	                <input class="form-control" type="text" 
	 	                                [(ngModel)] = "body"/><br>
	 	                <input class = "btn btn-primary" type = "button" 
	 	                          (click)="addNewPost()" value="Add Post"/>
	 	           </div>
	 	           <br>
 	           <ul *ngFor = "let post of posts">
 	           <li><b>{{post.title}}</b></li>
               <li>{{post.body}}</li>
 	           </ul>
               </div>  
 	          `


 })


 export class PostComponent{
 
      private posts : any[];
      private title : string;
      private body  : string;
      private newPost : any;

      constructor(private _postService:PostService){

       this._postService.getPosts().subscribe(response => {

       	this.posts=response
       });

      }
      /*addNewPost(){
      	this.newPost =  {

      		title : this.title,
      		body : this.body
      	}

	 console.log(this.newPost)

	 this._postService.addPost(this.newPost)
}*/


 }

