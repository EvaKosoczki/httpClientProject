import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../model/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.userService.addnewUser(this.newUser).subscribe(
      response => this.newUser= new User(),
      err=>console.error(err),
    )
  }
}
