import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { SMART_GARDEN_API } from './app-injections-tokens';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GardenListComponent } from './garden/garden-list/garden-list.component';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { UserService } from 'src/services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    GardenListComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    { provide: SMART_GARDEN_API, useValue: environment.smartGardenApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
