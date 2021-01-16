import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit, OnDestroy {

  chats: string[];

  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subs.add(
      this.route.data.subscribe(({chats}) => this.chats = chats)
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
