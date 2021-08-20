import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SaladPageComponent} from './salad-page/salad-page.component';
import {ToppingListComponent} from './topping-list/topping-list.component';

import {NgxsModule} from '@ngxs/store';
import {SaladState} from './salad.state';

const routes: Routes = [
  {path: 'order', component: SaladPageComponent}
]

@NgModule({
  declarations: [SaladPageComponent, ToppingListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState])
  ]
})
export class SaladModule {
}
