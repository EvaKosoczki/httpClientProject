import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  title = 'User Data';
  userList: User[] = [];
  userSubscription: Subscription;
  filterPhrase: string;
  modUserList: User[] = [];
  sorterKey: string = '';

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users =>
        this.userList = users
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  };
  sorterFunc(value: string): void {
    this.sorterKey = value;
  }
  /*
  userListModifier() {
    for (let i = 0; i < this.userList.length; i += 1) {
      this.modUserList.push({
        'id': this.userList[i].id, 'name': this.userList[i].name,
        'isActive': this.userList[i].isActive, 'age': this.userList[i].age,
        'email': this.userList[i].email, 'phone': this.userList[i].phone
      })
    };
    console.log(this.modUserList);
    return this.modUserList;
  }*/
}
