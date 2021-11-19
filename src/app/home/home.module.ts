import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizOverviewComponent } from './quiz-overview/quiz-overview.component';

@NgModule({
  declarations: [
  
    SigninComponent,
       ForgotPasswordComponent,
       CreateAccountComponent,
       UpdateUserComponent,
       DashboardComponent,
       QuizOverviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
