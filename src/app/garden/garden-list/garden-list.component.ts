import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GardenService } from 'src/services/garden.service';

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.css']
})
export class GardenListComponent implements OnInit {
  
  userId: any;
  gardens: any;

  constructor(
    private route: ActivatedRoute,
    private gardenService: GardenService
  ) {
    this.route.params.subscribe(p => {
      this.userId = +p['id'];
    });
   }

  ngOnInit(): void {

    if (this.userId) {
      this.gardenService.getGardensByUser(this.userId)
        .subscribe(result => this.gardens = result);
    } else {
      this.gardenService.getMyGardens()
        .subscribe(result => this.gardens = result);
    }
  }


}
