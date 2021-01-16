import { TestBed } from '@angular/core/testing';

import { MessengerChatByDefaultGuard } from './messenger-chat-by-default.guard';

describe('MessengerChatByDefaultGuard', () => {
  let guard: MessengerChatByDefaultGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MessengerChatByDefaultGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
