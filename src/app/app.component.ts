import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {SetUsername, ConfirmOrder} from './shared/app.action';
import {AppStateModel} from './shared/app.state';
import {Navigate} from './shared/router.state';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = '';
  state$: Observable<AppStateModel>;

  constructor(private store: Store) {
    this.state$ = this.store.select(state => state).pipe(pluck('app'));
  }

  clickHandler(username: string) {
    console.log(username);
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order')
    ]);
  }

  confirm() {
    this.store.dispatch(ConfirmOrder);
  }
}
