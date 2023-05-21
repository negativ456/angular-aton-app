import { Component, OnInit } from '@angular/core';
enum AuthTabs {
  Login = 'Login',
  Signup = 'Signup',
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  selectedTab: AuthTabs;

  changeTab(tab: AuthTabs) {
    this.selectedTab = tab;
  }

  ngOnInit(): void {
    this.selectedTab = AuthTabs.Login;
  }
  protected readonly AuthTabs = AuthTabs;

  protected readonly Object = Object;
}
