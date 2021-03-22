import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenListComponent } from './garden/garden-list/garden-list.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'gardens', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id/gardens', component: GardenListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
