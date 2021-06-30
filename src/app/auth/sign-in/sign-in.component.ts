import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/models/user/login-model';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  error: any;
  login: LoginModel = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
    ) {
      if (authService.isLoggedIn) {
        this.userService.getMyUser()
          .subscribe(user => {
            if (user.role == "admin") {
              this.router.navigate(['/users']);
            } 
            else {
              this.router.navigate(['/gardens/my']);
            }
          });
      }
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.login).subscribe(
      (res: any) => {

        this.userService.getMyUser()
          .subscribe(user => {
            if (user.role == "admin") {
              this.router.navigate(['/users']);
            } 
            else {
              this.router.navigate(['/gardens/my']);
            }
          });

      },
      (error) => {
        this.error = error.error;
      });
  }

}
