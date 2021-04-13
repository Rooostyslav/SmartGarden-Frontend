import { Component, OnInit } from '@angular/core';
import { Backup } from 'src/models/backup/backup';
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

  backups: any;
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

    this.backupService.getAllBackupsFileNames()
      .subscribe(result => this.backups = result);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get backupString(): string {
    return this.backupService.getBackupPath();
  }

  get isAdmin(): boolean {
    if (this.authService.isLoggedIn) {
      if(this.user.role && this.user.role == "admin") {
        return true;
      }
    }
    return false;
  }

  createBackup() {
    this.backupService.getAllBackupsFileNames()
      .subscribe(result => this.backups = result);
  }
  
  applyBackup(backupFileName: string) {

    var backup: Backup = {
      fileName: backupFileName
    };

    this.backupService.applyBackup(backup)
      .subscribe(result => {
        alert("Success apply backup > " + backup.fileName + "!");
      });
  }

}
