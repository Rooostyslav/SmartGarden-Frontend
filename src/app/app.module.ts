import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { SMART_GARDEN_API, SMART_GARDEN_AUTH_API } from './app-injections-tokens';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GardenListComponent } from './garden/garden-list/garden-list.component';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { UserService } from 'src/services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GardenService } from 'src/services/garden.service';
import { PlantFormComponent } from './plant/plant-form/plant-form.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { PlantService } from 'src/services/plant.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { AuthInterceptor } from 'src/interseptors/auth-interceptor';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BackupService } from 'src/services/backup.service';
import { UserRoomComponent } from './user/user-room/user-room.component';
import { ActionListComponent } from './action/action-list/action-list.component';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { ViewPlantComponent } from './plant/view-plant/view-plant.component';
import { GardenFormComponent } from './garden/garden-form/garden-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    GardenListComponent,
    NavigationBarComponent,
    PlantFormComponent,
    PlantListComponent,
    SignInComponent,
    SignUpComponent,
    UserRoomComponent,
    ActionListComponent,
    ResourceListComponent,
    ViewPlantComponent,
    GardenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    GardenService,
    PlantService,
    AuthService,
    BackupService,
    { provide: SMART_GARDEN_API, useValue: environment.smartGardenApi },
    { provide: SMART_GARDEN_AUTH_API, useValue: environment.smartGardenAuthApi },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
