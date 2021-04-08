import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GardenService } from 'src/services/garden.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.css']
})
export class GardenListComponent implements OnInit {
  
  topicText: any;
  userId: any;
  user: any;
  gardens: any;

  constructor(
    private route: ActivatedRoute,
    private gardenService: GardenService,
    private userService: UserService
  ) {
    this.route.params.subscribe(p => {
      this.userId = +p['id'];
    });
   }

  ngOnInit(): void {
    if (this.userId) {

      this.userService.getUserById(this.userId)
        .subscribe(result => {
          this.user = result;
          this.topicText = 'Gardens in user: "' + this.user.name + '"';
        });

      this.gardenService.getGardensByUser(this.userId)
        .subscribe(result => this.gardens = result);
        
    } else {

      this.topicText = 'My Gardens';
      this.gardenService.getMyGardens()
        .subscribe(result => this.gardens = result);
    }
  }


}
