import {Component, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {StartOver} from '../salad.actions';
import {SaladState, SaladStateModel} from '../salad.state';
import {Observable} from 'rxjs';


@Component({
  selector: 'salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {
  @Select() salad$: Observable<SaladStateModel>;
  @Select(SaladState.getDressing) dressing$: Observable<string>;
  @Select((state: SaladStateModel) => state.price) price$: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  startOver() {
    this.store.dispatch(new StartOver());
  }


}
