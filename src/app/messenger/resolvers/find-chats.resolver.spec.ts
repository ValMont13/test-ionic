import { TestBed } from '@angular/core/testing';

import { FindChatsResolver } from './find-chats.resolver';

describe('FindChatsResolver', () => {
  let resolver: FindChatsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FindChatsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
