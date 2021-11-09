import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqQuestionsComponent } from '../mcq/mcq-questions/mcq-questions.component';
import { McqComponent } from '../mcq/mcq.component';

const routes: Routes = [
  {
    path:'mcq',component:McqComponent
  },
  {
    path:'mcq-details',component:McqQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
