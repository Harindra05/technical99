import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialHomePageComponent } from './tutorial/tutorial-home-page/tutorial-home-page.component';
import { TutorialMainComponent } from './tutorial/tutorial-main/tutorial-main.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':lang', component: TutorialHomePageComponent },
    { path: ':lang/tutorial', component: TutorialMainComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
    // {
    //     path: 'mcq',
    //     loadChildren: () => import('./layout/simple-layout/simple.module').then(m => m.SimpleModule)
    // },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
