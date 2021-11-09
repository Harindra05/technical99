import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public form: FormGroup;
  ngOnInit(): void {
    $('.show-footer').click(function() {
      $('.other-technology').toggleClass('show-more');
  });
  this.form = this.fb.group({
    rating2: [5],
    ratings: [5, Validators.required],
  })
  }
  viewMore(){
    setTimeout(() => {
      window.scroll({
        top:1500
      })
    }, 300);
 
  }
}
