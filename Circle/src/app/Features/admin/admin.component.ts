import { Component } from '@angular/core';
import { User } from './user-list/user.model';
import { UserService } from 'src/app/Shared/services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  users: User[] = [];
  selectedUser:User = {
    password:"",
    userEmail: "",
    userName: "",
    userRole: "",
    _id: "",
    __v: 0
  };
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(data => {
      this.users = data;
      this.selectedUser = this.users[0];
    }, error => {
      console.error('There was an error!', error);
    });
  }

}
