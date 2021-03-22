import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from 'src/services/plant.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent implements OnInit {

  plant: any;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) { 
    this.route.params.subscribe(p => {
      this.plant.id = +p['id'];
    });
  }

  ngOnInit(): void {
    this.plantService.getPlantById(this.plant.id)
      .subscribe(result => {
        this.plant = result;
      })
  }

  onSubmit() {
    if  (this.plant.id) {
      this.plantService.postPlant(this.plant)
        .subscribe(result => {
          console.log("Success created");
        })
    }
  }

}
