import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selUserId: number;
  selUser: User;
  constructor(private userService: UserService,
    private ar: ActivatedRoute) {
    this.ar.params.forEach(params => {
      this.selUserId = params.id;
      console.log(this.selUserId);
      //this.selUser = this.userList
    })
  }

  ngOnInit() {
  }

}
