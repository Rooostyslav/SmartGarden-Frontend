import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionListComponent } from './action/action-list/action-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { GardenListComponent } from './garden/garden-list/garden-list.component';
import { PlantFormComponent } from './plant/plant-form/plant-form.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { ViewPlantComponent } from './plant/view-plant/view-plant.component';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserRoomComponent } from './user/user-room/user-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'cabinet', component: UserRoomComponent },
  { path: 'users', component: UserListComponent },

  { path: 'users/:id/gardens', component: GardenListComponent },
  { path: 'gardens/:id/plants', component: PlantListComponent },
  { path: 'gardens/:id/resources', component: ResourceListComponent },
  { path: 'plants/:id/actions', component: ActionListComponent },

  { path: 'plants/new', component: PlantFormComponent },
  { path: 'plants/edit/:id', component: PlantFormComponent },
  { path: 'plants/view/:id', component: ViewPlantComponent },

  { path: 'gardens/my', component: GardenListComponent },
  { path: 'plants/my', component: PlantListComponent },
  { path: 'actions/my', component: ActionListComponent },
  { path: 'resources/my', component: ResourceListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
