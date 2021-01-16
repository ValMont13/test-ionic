import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chats-conv',
  templateUrl: './chats-conv.component.html',
  styleUrls: ['./chats-conv.component.scss'],
})
export class ChatsConvComponent implements OnInit {

  @Input() messages: string[] = [];

  constructor() { }

  ngOnInit() {}

}
