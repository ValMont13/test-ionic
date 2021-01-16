import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chats-tree',
  templateUrl: './chats-tree.component.html',
  styleUrls: ['./chats-tree.component.scss'],
  host: {style: 'display: flex; flex-direction: column; min-width: 250px; margin-right: 24px"'}
})
export class ChatsTreeComponent implements OnInit {

  @Input() chats: string[] = [];

  constructor() { }

  ngOnInit() {}

}
