import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  user: any = {
    name: '',
    email: ''
  };

  constructor(
    private router: Router,
    public authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.userService.getMyUser()
        .subscribe(result => {
          this.user = result;
        });
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

  get isUser(): boolean {
    if (this.authService.isLoggedIn) {
      if (this.user.role == "user") {
        return true;
      }
    }
    return false;
  }

  logout() {
    this.user = {
      name: '',
      email: ''
    };
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
