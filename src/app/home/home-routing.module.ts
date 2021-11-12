import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqQuestionsComponent } from '../mcq/mcq-questions/mcq-questions.component';
import { McqComponent } from '../mcq/mcq.component';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizDetailsComponent } from '../quiz/quiz-details/quiz-details.component';


const routes: Routes = [
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
    path:'quiz-details',component:QuizDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
