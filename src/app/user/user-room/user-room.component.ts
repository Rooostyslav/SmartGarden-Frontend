import { Component, OnInit } from '@angular/core';
import { ViewUser } from 'src/models/user/view-user';
import { AuthService } from 'src/services/auth.service';
import { BackupService } from 'src/services/backup.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit {

  user: ViewUser = {
    id: 0,
    name: '',
    email: '',
    role: ''
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private backupService: BackupService
  ) { }

  ngOnInit(): void {
    this.userService.getMyUser()
      .subscribe(result => this.user = result);
  }

  isAdmin(): boolean {
    if (this.authService.isLoggedIn) {
      if(this.user.role && this.user.role == "admin") {
        return true;
      }
    }
    return false;
  }
  
  get backupString(): string {
    return this.backupService.getBackupPath();
  }

}
