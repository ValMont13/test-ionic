import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FindChatsResolver implements Resolve<string[]> {
  constructor(private platform: Platform) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    if (this.platform.is('mobile') && state.url.startsWith('/messenger/')) {
      return of(undefined);
    } else {
      return of(['chat1', 'chat2', 'chat3']);
    }
  }
}
