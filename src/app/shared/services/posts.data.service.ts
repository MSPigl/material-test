import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {

  ELEMENT_DATA: Post[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4'},
    {position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5'},
    {position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6'},
  ];

  categories: Array<{ value: string, viewValue: string }> = [
    { value: 'Web-Development', viewValue: 'Web Development' },
    { value: 'Android-Development', viewValue: 'Android Development' },
    { value: 'IOS-Development', viewValue: 'IOS Development' }
  ];

  constructor() { }

  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories(): Array<{ value: string, viewValue: string }> {
    return this.categories;
  }

  addPost(data): void {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index: number): void {
    this.ELEMENT_DATA.splice(index, 1);
    for (let i = 0; i < this.dataLength(); i++) {
      this.ELEMENT_DATA[i].position = i;
    }
  }

  dataLength(): number {
    return this.ELEMENT_DATA.length;
  }
}
