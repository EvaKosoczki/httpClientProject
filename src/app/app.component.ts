import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    
  }

  
}
