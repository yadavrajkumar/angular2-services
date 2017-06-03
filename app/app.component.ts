import {Component} from '@angular/core';
 
import {PostService} from './services/post.service';
import {PostComponent} from './services/post.component';

@Component({

	selector : 'my-app',
	 template :

	 			`
               <h3>This is angular2 app</h3>
               <post-service></post-service>

	 			`,
	 			providers : [PostService]
})

export class AppComponent{


}