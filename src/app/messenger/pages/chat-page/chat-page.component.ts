import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit, OnDestroy {

  settingsOpened: boolean;
  chats: string[];
  messages: string[];

  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.subs.add(
      this.route.data.subscribe(({chats, messages}) => {
        this.chats = chats;
        this.messages = messages;
      })
    );
    this.subs.add(
      this.route.queryParams.subscribe(({settings}) => {
        if (settings) {
          this.settingsOpened = JSON.parse(settings);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
