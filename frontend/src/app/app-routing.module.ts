import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresseeComponent } from './pages/addressee/addressee.component';
import { TransfersListComponent } from './pages/transfers-list/transfers-list.component';
import { TransfersComponent } from './pages/transfers/transfers.component';

const routes: Routes = [
  {path: 'addressee', component: AddresseeComponent},
  {path: 'transfers', component: TransfersComponent},
  {path: 'transfers-list', component: TransfersListComponent},
  {path: '', redirectTo: '/addressee', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
