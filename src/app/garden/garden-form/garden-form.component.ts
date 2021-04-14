import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { GardenService } from 'src/services/garden.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-garden-form',
  templateUrl: './garden-form.component.html',
  styleUrls: ['./garden-form.component.css']
})
export class GardenFormComponent implements OnInit {

  users: any;
  user: any = {
    role: ''
  };
  garden: any = {
    name: ''
  };

  constructor(
    private router: Router,
    private gardenService: GardenService,
    private userService: UserService,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.userService.getMyUser()
    .subscribe(result => {
      this.user = result;

      if (this.isAdmin) {
        this.userService.getAllUsers()
          .subscribe(result => this.users = result);
      }

    });
  }

  get isAdmin(): boolean {
    if (this.authService.isLoggedIn) {
      if (this.user.role == "admin") {
        return true;
      }
    }
    return false;
  }

  onSubmit() {

    if (!this.isAdmin) {
      this.garden.userId = this.user.id;
    }

    this.gardenService.createGarden(this.garden)
      .subscribe(result => {
        alert("Succes create new Garden!");

        if (!this.isAdmin) {
          this.router.navigate(['/gardens/my']);
        }

      });
  }

}
