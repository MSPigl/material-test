import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {PostsDataService} from '../shared/services/posts.data.service';
import {Post} from '../shared/models/post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dataService: PostsDataService) { }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  deletePost(index: number): void {
    this.dataService.deletePost(index);
    this.dataSource = new PostDataSource(this.dataService);
  }
}

export class PostDataSource extends DataSource<any> {

  constructor(private dataService: PostsDataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect(): void {
  }
}
