import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessengerChatByDefaultGuard implements CanActivate {
  constructor(private router: Router, private platform: Platform) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.platform.is('desktop')) {
      // Il faut choper l'id du premier chat de l'user
      const fakeChatId = 'chat1';
      return this.router.navigate([`/messenger/${fakeChatId}`]);
    }
    return true;
  }

}
