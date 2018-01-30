import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class PostService {

   constructor(private http: HttpClient) {}

   private postsUrl = "http://jsonplaceholder.typicode.com/posts"

   // get all posts
   getAllPosts(): Observable<Post[]> {
     return this.http.get(this.postsUrl)
                         // ...and calling .json() on the response to return data
                          .map((res:Response) => res.json())
                          //...errors if any
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {}
}
