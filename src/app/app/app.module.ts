import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './router/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../features/AuthForm/model/store/auth.effects';
import { UserEffects } from '../entities/User/model/state/user.effects';
import { NotificationModule } from '../entities/Notification/notification.module';
import { UiKitModule } from '../shared/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects, UserEffects]),
    StoreModule.forRoot(appReducer),
    NotificationModule,
    UiKitModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
