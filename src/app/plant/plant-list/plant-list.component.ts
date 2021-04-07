import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GardenService } from 'src/services/garden.service';
import { PlantService } from 'src/services/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: any;
  gardenId: any;
  garden: any = {
    name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private gardenService: GardenService) {
      this.route.params.subscribe(p => {
        this.gardenId = +p['id'];
      });
    }

  ngOnInit(): void {
    this.gardenService.getGardenById(this.gardenId)
      .subscribe(result => this.garden = result);

    this.plantService.getPlantByGarden(this.gardenId)
      .subscribe(result => this.plants = result);
  }

  onDelete(plantId: number) {
    this.plantService.deletePlant(plantId)
      .subscribe(result => {
        alert("Success delete!");
      });
  }
}
