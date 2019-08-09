import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData: any;
  Count: number = 0;
  activeUserCount: number = 0;
  notactiveUserCount: number = 0;
  balance: number = 0;
  appleCounter: number = 0;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getAll().subscribe(
      response => {
        this.allData = response;
      },
      err => console.error(err)
    );
    this.countUser()
  }

  countUser() {
    for (let i = 0; i < this.allData.length; i += 1) {
      this.Count += 1;
    }
    return this.Count;
  }
  countActiveUser() {
    for (let i = 0; i < this.allData.length; i += 1) {
      if (this.allData[i].isActive) {
        this.activeUserCount++;
      }
    }
    return this.activeUserCount;
  }
  countNotActiveUser() {
    this.notactiveUserCount = this.Count - this.activeUserCount
    return this.notactiveUserCount
  }
  sumBalance() {
    for (let i = 0; i < this.allData.length; i += 1) {
      this.balance += parseInt(this.allData[i].balance.replace('$', '').replace(',', ''))
    }
    return this.balance;
  }
  countAppleLover() {
    for (let i = 0; i < this.allData.length; i += 1) {
      if (this.allData[i].favoriteFruit === 'apple') {
        this.appleCounter++;
      }
    }
    return this.appleCounter;
  }
}
