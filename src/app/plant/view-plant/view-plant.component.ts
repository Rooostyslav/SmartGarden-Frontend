import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewPlant } from 'src/models/plant/view-plant';
import { PlantService } from 'src/services/plant.service';

@Component({
  selector: 'app-view-plant',
  templateUrl: './view-plant.component.html',
  styleUrls: ['./view-plant.component.css']
})
export class ViewPlantComponent implements OnInit {

  plantId: any;
  condition: any;
  plant: ViewPlant = {
    id: 0,
    name: '',
    description: '',
    location: '',
  };

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {
    this.route.params.subscribe(p => {
      this.plantId = +p['id'];
    });
  }

  ngOnInit(): void {
    this.plantService.getPlantById(this.plantId)
      .subscribe(result => {
        this.plant = result;
        this.plantService.getPlantCondition(this.plantId)
          .subscribe(result => {
            this.condition = result;
        });
      });
  }

}
