import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersPageModule } from './pages/users-page/users-page.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'users', component: UsersPageComponent },
];

@NgModule({
  imports: [LoginPageModule, UsersPageModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
