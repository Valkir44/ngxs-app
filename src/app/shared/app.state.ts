import {State, Action, StateContext} from '@ngxs/store';
import {SetUsername, ConfirmOrder, OrderFailed, OrderSuccess} from './app.action';
import {tap} from 'rxjs/operators';
import {OrderService} from '../order.service';
import {Injectable} from '@angular/core';

export interface AppStateModel {
  username: string;
  orderId: number;
  status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    orderId: Math.floor(Math.random() * 23000)
  }
})

@Injectable()
export class AppState {
  constructor(private orderService: OrderService) {
  }

  @Action(SetUsername)
  setUsername({patchState}: StateContext<AppStateModel>, {payload}: SetUsername) {
    patchState({username: payload});
  }

  @Action(ConfirmOrder, {cancelUncompleted: true})
  confirm({dispatch, patchState}: StateContext<AppStateModel>) {
    patchState({status: 'pending'});

    return this.orderService.post().pipe(
      tap(success => (success ? dispatch(OrderSuccess) : dispatch(OrderFailed)))
    );
  }

  @Action(OrderSuccess)
  orderSuccess({patchState}: StateContext<AppStateModel>) {
    patchState({status: 'confirmed'});
  }

  @Action(OrderFailed)
  orderFailed({patchState}: StateContext<AppStateModel>) {
    patchState({status: 'declined'});
  }
}
