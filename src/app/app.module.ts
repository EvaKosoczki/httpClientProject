import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavComponent } from './page/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { EditUserComponent } from './page/edit-user/edit-user.component';
import { AddUserComponent } from './page/add-user/add-user.component';
import { SearchPipePipe } from './pipe/search-pipe.pipe';
import { OrderPipe } from './pipe/order.pipe';
import { PopupComponent } from './popup/popup/popup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'newuser',
    component: AddUserComponent,
  },
  {
    path: 'edituser/:id',
    component: EditUserComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UsersComponent,
    EditUserComponent,
    AddUserComponent,
    SearchPipePipe,
    OrderPipe,
    PopupComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent
  ]
})
export class AppModule { }
