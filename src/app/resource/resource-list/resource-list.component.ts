import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GardenService } from 'src/services/garden.service';
import { ResourceService } from 'src/services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  topicText: any;
  gardenId: any;
  garden: any;
  resources: any;

  constructor(
    private route: ActivatedRoute,
    private gardenService: GardenService,
    private resourceService: ResourceService
  ) {
    this.route.params.subscribe(p => {
      this.gardenId = +p['id'];
    });
   }

  ngOnInit(): void {
    if (this.gardenId) {

      this.gardenService.getGardenById(this.gardenId)
        .subscribe(result => {
          this.garden = result;
          this.topicText = 'Resources in garden: "' + this.garden.name + '"';
        });

        this.resourceService.getResoucesByGarden(this.gardenId)
          .subscribe(result => this.resources = result);
        
    } else {

      this.topicText = 'My Resources';
      this.resourceService.getMyResouces()
          .subscribe(result => this.resources = result);
    }
  }

}
