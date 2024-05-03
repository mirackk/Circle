import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../../Shared/services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users!: User[];
  @Input() selectedUser!: User;
  selectedIndex = -1;
  @Output() changeSelectedUser = new EventEmitter<User>();

  addUser(){

  }

  selectUser(user: User, _index: number): void{
    this.selectedUser = user
    this.selectedIndex = _index;
    this.changeSelectedUser.emit(this.selectedUser);
  }

}
