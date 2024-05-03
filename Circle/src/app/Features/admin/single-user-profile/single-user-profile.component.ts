import { Component, Input } from '@angular/core';
import { User } from '../user-list/user.model';

@Component({
  selector: 'app-single-user-profile',
  templateUrl: './single-user-profile.component.html',
  styleUrls: ['./single-user-profile.component.scss']
})
export class SingleUserProfileComponent {
  @Input() selectedUser!: User;

  saveUser() {
    // Save logic here
  }

  deleteUser() {
    // Delete logic here
  }

}
