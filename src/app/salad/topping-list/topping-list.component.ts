import {Component, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {AddTopping} from '../salad.actions';
import {SaladStateModel} from '../salad.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent implements OnInit {

  choices = [
    'Olives',
    'Tomatoes',
    'Croutons',
    'Pickles',
    'Shrimp',
    'Pepitas',
    'Carrots'
  ];

  @Select((state: SaladStateModel) => state.toppings) toppings$: Observable<string[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  add(name: any) {
    this.store.dispatch(new AddTopping(name));
  }


}
