import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenListComponent } from './garden/garden-list/garden-list.component';
import { PlantFormComponent } from './plant/plant-form/plant-form.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'gardens', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id/gardens', component: GardenListComponent },
  { path: 'gardens/:id/plants', component: PlantListComponent },
  { path: 'plant/new', component: PlantFormComponent },
  { path: 'plants/edit/:id', component: PlantFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
