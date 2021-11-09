import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialHomePageComponent } from './tutorial-home-page/tutorial-home-page.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
//import { TutorialMainComponent } from './tutorial-main/tutorial-main.component';



@NgModule({
  declarations: [
    
    TutorialHomePageComponent,
         SideMenuComponent,
        // TutorialMainComponent
         
  ],
  imports: [
    CommonModule
  ]
})
export class TutorialModule { }
