import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { GardenService } from 'src/services/garden.service';
import { PlantService } from 'src/services/plant.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent implements OnInit {

  user: any = {
    role: ''
  };
  gardens: any;
  plant: any = {
    id: 0,
    name: '',
    description: '',
    location: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private plantService: PlantService,
    private gardenService: GardenService,
    private userService: UserService,
    private authService: AuthService
  ) { 
    this.route.params.subscribe(p => {
      this.plant.id = +p['id'];
    });
  }

  ngOnInit(): void {
    this.userService.getMyUser()
      .subscribe(result => {
        this.user = result;

        if (this.isAdmin) {
          this.gardenService.getGardensByUser(3)
            .subscribe(result => {
              this.gardens = result;
              console.log(this.gardens)
            });
        } else {
          this.gardenService.getMyGardens()
            .subscribe(result => {
              this.gardens = result;
              console.log(this.gardens)
            });
        }

      });

    if (this.plant.id) {
      this.plantService.getPlantById(this.plant.id)
      .subscribe(result => {
        this.plant = result;
      })
    }

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
    if  (!this.plant.id) {
      this.plant.id = 0;
      this.plantService.createPlant(this.plant)
        .subscribe(result => {
          alert("Success created");

          if (!this.isAdmin) {
            this.router.navigate(['/plants/my']);
          }
        });
    }
  }

}
