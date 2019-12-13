import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ConfigService} from './services/config.service';
import {AdditemComponent} from './additem/additem.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'additem', component: AdditemComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: 'PageNotFoundComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule, LoginComponent, HomeComponent],
  providers: [ConfigService],
  bootstrap: [],
  declarations: [LoginComponent, HomeComponent]
})

export class AppRoutingModule {
}
