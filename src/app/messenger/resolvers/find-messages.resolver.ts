import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

const MESSAGES_MAP = {
  chat1: ['Bonjour Machin !', 'Ceci est une conversation sans style.css', 'C\'est horrible n\'est-ce pas ?'],
  chat2: ['Bonjour Chat2 !', 'Ceci est une conversation sans style.css', 'C\'est horrible n\'est-ce pas ?'],
  chat3: ['Bonjour Chat3 !', 'Ceci est une conversation sans style.css', 'C\'est horrible n\'est-ce pas ?']
};

@Injectable({
  providedIn: 'root'
})
export class FindMessagesResolver implements Resolve<string[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string[]> {
    const {params} = route;

    // https://angular.io/api/router/Resolve
    return Promise.resolve(MESSAGES_MAP[params.chatId]);
  }
}
