import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from 'src/services/action.service';
import { PlantService } from 'src/services/plant.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {

  topicText: any;
  plantId: any;
  plant: any;
  actions: any;

  constructor(
    private route: ActivatedRoute,
    private actionService: ActionService,
    private plantService: PlantService
  ) {
    this.route.params.subscribe(p => {
      this.plantId = +p['id'];
    });
  }

  ngOnInit(): void {
    if (this.plantId) {

      this.plantService.getPlantById(this.plantId)
        .subscribe(result => {
          this.plant = result;
          this.topicText = 'Actions in plant: "' + this.plant.name + '"';
        });

      this.actionService.getActionsByPlant(this.plantId)
        .subscribe(result => this.actions = result);

    } else {

      this.topicText = 'My Actions';
      this.actionService.getMyActions()
        .subscribe(result => this.actions = result);
    }


  }

}
