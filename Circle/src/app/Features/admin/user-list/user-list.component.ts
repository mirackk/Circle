import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Shared/services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(data => {
      this.users = data;
      console.log(data);
    }, error => {
      console.error('There was an error!', error);
    });
  }

}
