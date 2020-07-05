import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {PostsDataService} from '../shared/services/posts.data.service';
import {Post} from '../shared/models/post.model';
import {MatDialog} from '@angular/material/dialog';
import {PostDialogComponent} from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dataService: PostsDataService, public dialog: MatDialog) { }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  deletePost(index: number): void {
    this.dataService.deletePost(index);
    this.dataSource = new PostDataSource(this.dataService);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });

    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
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
