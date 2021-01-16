import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessengerPage} from './messenger.page';
import {MessengerChatByDefaultGuard} from './guards/messenger-chat-by-default.guard';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {NewPageComponent} from './pages/new-page/new-page.component';
import {ChatsSettingsComponent} from './components/chats-settings/chats-settings.component';
import {FindMessagesResolver} from './resolvers/find-messages.resolver';
import {FindChatsResolver} from './resolvers/find-chats.resolver';

const routes: Routes = [
  {
    path: '',
    component: MessengerPage,
    // Guard pour rediriger en web vers le premier chat disponible.
    canActivate: [MessengerChatByDefaultGuard],
    resolve: {
      chats: FindChatsResolver
    }
  },
  {
    path: 'new',
    // Idem, si router.url = '/new' alors on lance le composant pour créer une nouvelle conv.
    component: NewPageComponent
  },
  {
    path: ':chatId',
    children: [{
      path: '',
      // On peut créer une sous page par sous route, ou prendre la même page et récupérer le mode via le router (Si ActivatedRoute a dans ses params chatId, ça veut dire qu'il faut afficher une conv)
      component: ChatPageComponent,
      resolve: {
        chats: FindChatsResolver,
        messages: FindMessagesResolver
      }
    }, {
      path: 'settings',
      component: ChatsSettingsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessengerPageRoutingModule {
}
