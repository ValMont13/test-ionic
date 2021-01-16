import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MessengerPageRoutingModule} from './messenger-routing.module';

import {MessengerPage} from './messenger.page';
import {ChatsConvComponent} from './components/chats-conv/chats-conv.component';
import {ChatsNewComponent} from './components/chats-new/chats-new.component';
import {ChatsSettingsComponent} from './components/chats-settings/chats-settings.component';
import {ChatsTreeComponent} from './components/chats-tree/chats-tree.component';
import {NewPageComponent} from './pages/new-page/new-page.component';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessengerPageRoutingModule
  ],
  declarations: [
    MessengerPage,
    NewPageComponent,
    ChatPageComponent,
    ChatsConvComponent,
    ChatsNewComponent,
    ChatsSettingsComponent,
    ChatsTreeComponent,
  ]
})
export class MessengerPageModule {
}
