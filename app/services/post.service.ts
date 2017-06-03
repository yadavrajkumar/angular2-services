import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/Rx';
import {map} from 'rxjs/operator/map';

interface Post {


	_id : number,
	title : string,
	body : string,
}


@Injectable()


export class PostService{


private posts : any[] ;
private apiUrl:string;
private postData : any;

constructor(private _http:Http){



            this.apiUrl = "https://jsonplaceholder.typicode.com/posts"
	/*this.posts = [

	{
      title : 'Hell Hyderabad',
      body : 'I am wishing good day to everybody !!!!'

	},
	{

      title : 'fresh News',
      body : 'yogi is CM of Up  !!!!'		
	},
	{

      title : 'latest Movie block buster movie',
      body : 'bahubali 2  !!!!'

	},
	{

	 title : 'Wich actor got national award',
      body : 'Akshay kumar !!!!'
	}

	]*/
}

  getPosts() : Observable<Post[]>{
    

             return  this._http
		                   .get(this.apiUrl)
		                   .map(function(response){
		                    
		                     return response.json()

                   });

  	//return this.posts;
  	//return this._http.get(this.apiUrl)

  }
 /* addPost(newPost:any){

this.posts.push(newPost);
   
  }

}
*/