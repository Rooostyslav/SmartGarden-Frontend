import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error: any;
  user: any = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(
    private router: Router,
    public authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(result => {
      
      alert("Success register!");

      if (this.authService.isLoggedIn) {
        this.router.navigate(['/users']);
      } 
      else {
        this.router.navigate(['/log-in']);
      }
      
    }, (error) => {
      this.error = error.error;
    });
  }
}
