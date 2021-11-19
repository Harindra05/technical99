import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqQuestionsComponent } from '../mcq/mcq-questions/mcq-questions.component';
import { McqComponent } from '../mcq/mcq.component';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizDetailsComponent } from '../quiz/quiz-details/quiz-details.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizOverviewComponent } from './quiz-overview/quiz-overview.component';


const routes: Routes = [
  {
    path:'login',component:SigninComponent
  },
  {
    path:'forgot-pasword',component:ForgotPasswordComponent
  },
  {
    path:'register',component:CreateAccountComponent
  },
  {
    path:'update-user',component:UpdateUserComponent
  },
  {
    path:'mcq',component:McqComponent
  },
  {
    path:'mcq-details',component:McqQuestionsComponent
  },
  {
    path:'quiz', component:QuizComponent
  },
  {
    path:'quiz-report',component:DashboardComponent
  },
  {
    path:'quiz-details',component:QuizDetailsComponent
  },
  {
    path:'quiz-overview',component:QuizOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
