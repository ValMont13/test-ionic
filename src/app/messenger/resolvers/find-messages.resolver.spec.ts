import { TestBed } from '@angular/core/testing';

import { FindMessagesResolver } from './find-messages.resolver';

describe('FindMessagesResolver', () => {
  let resolver: FindMessagesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FindMessagesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
