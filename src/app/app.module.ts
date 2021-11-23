
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
import { QuizComponent } from './quiz/quiz.component';
import { QuizDetailsComponent } from './quiz/quiz-details/quiz-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { QuizOverviewComponent } from './home/quiz-overview/quiz-overview.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SigninComponent } from './home/signin/signin.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './home/create-account/create-account.component';
import { UpdateUserComponent } from './home/update-user/update-user.component';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle, ApexXAxis, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';
import { SigninWithOtpComponent } from './home/signin-with-otp/signin-with-otp.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
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
    McqQuestionsComponent,
    QuizComponent,
    QuizDetailsComponent,
    QuizOverviewComponent,
    DashboardComponent,    
    SigninComponent,
    SigninWithOtpComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    UpdateUserComponent,
    ProfileHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AppRoutingModule, 
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
