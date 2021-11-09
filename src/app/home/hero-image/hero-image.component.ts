import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {
  @Input() isHomePage;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  isTutorial(){
    return this.router.url;
   }
}
