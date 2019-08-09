import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './page/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { EditUserComponent } from './page/edit-user/edit-user.component';
import { AddUserComponent } from './page/add-user/add-user.component';
import { SearchPipePipe } from './pipe/search-pipe.pipe';
import { OrderPipe } from './pipe/order.pipe';

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
  }, {
    path: '**',
    component: HomeComponent,//legyen 404 oldal!
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
    OrderPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
