import { TestBed } from '@angular/core/testing';

import { Posts.DataService } from './posts.data.service';

describe('Posts.DataService', () => {
  let service: Posts.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Posts.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
