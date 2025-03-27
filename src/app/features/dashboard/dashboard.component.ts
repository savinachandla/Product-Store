import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { NgFor, CommonModule, } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NgFor, CommonModule, MatCardModule, MatGridListModule, MatButtonModule, MatIconModule],
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  isLoading = true;

  constructor(
    private userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.userService.getUsers().subscribe(
        (data) => {
          this.users = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching users:', error);
          this.isLoading = false;
        }
      );
    } else {
      this.isLoading = false;
    }
  }
}
