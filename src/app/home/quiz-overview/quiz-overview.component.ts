import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeModel } from '@ngstack/code-editor';
import { ChartComponent } from 'ng-apexcharts';
declare var $:any;
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ToastrService } from 'ngx-toastr';
import { ChartOptions } from 'src/app/app.module';
@Component({
  selector: 'app-quiz-overview',
  templateUrl: './quiz-overview.component.html',
  styleUrls: ['./quiz-overview.component.scss']
})
export class QuizOverviewComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
    constructor(private fb: FormBuilder, private toastr:ToastrService) {
      this.chartOptions = {
        series: [{
          name: 'Desktops',
          data: [10, 41, 35]
        }],
        chart: {
          width: 300,
          type: "pie"
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
     }
    theme = 'vs';
    isActive=true;
    public form: FormGroup;
    ngOnInit(): void {
      $('.show-footer').click(function() {
        $('.other-technology').toggleClass('show-more');
    });
    $(function(){
      $(".fold-table tr.view").on("click", function(){
        $(this).toggleClass("open").next(".fold").toggleClass("open");
      });
    });
    this.form = this.fb.group({
      rating2: [5],
      ratings: [5, Validators.required],
    })
    }
    onCodeChanged(value) {
      console.log('CODE', value);
    }
  }
