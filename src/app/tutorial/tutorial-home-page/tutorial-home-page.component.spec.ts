import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialHomePageComponent } from './tutorial-home-page.component';

describe('TutorialHomePageComponent', () => {
  let component: TutorialHomePageComponent;
  let fixture: ComponentFixture<TutorialHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
