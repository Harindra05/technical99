
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimaryHeaderComponent } from './SharedComponents/primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './SharedComponents/secondary-header/secondary-header.component';
import { HeroImageComponent } from './home/hero-image/hero-image.component';
import { TrendingCoursesComponent } from './home/trending-courses/trending-courses.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { TutorialComponent } from './SharedComponents/tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TutorialHomePageComponent } from './tutorial/tutorial-home-page/tutorial-home-page.component';
import { LanguageListComponent } from './tutorial/language-list/language-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SideMenuComponent } from './tutorial/side-menu/side-menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FaqsComponent } from './SharedComponents/faqs/faqs.component';
import { TutorialMainComponent } from './tutorial/tutorial-main/tutorial-main.component';
import { ApiService } from './services/api.service';
import { McqComponent } from './mcq/mcq.component';
import { McqQuestionsComponent } from './mcq/mcq-questions/mcq-questions.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':lang', component: TutorialHomePageComponent },
  { path: ':lang/tutorial', component: TutorialMainComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
    HeroImageComponent,
    TrendingCoursesComponent,
    TutorialComponent,
    HomeComponent,
    TutorialHomePageComponent,
    LanguageListComponent,
    SideMenuComponent,
    FaqsComponent,
    TutorialMainComponent,
    McqComponent,
    McqQuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule.forRoot(routes),
    MatExpansionModule,
    CodeEditorModule.forRoot(),
    ReactiveFormsModule,
    NgxStarRatingModule,
    ToastrModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
