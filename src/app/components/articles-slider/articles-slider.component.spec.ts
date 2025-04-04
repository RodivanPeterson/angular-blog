import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSliderComponent } from './articles-slider.component';

describe('ArticlesSliderComponent', () => {
  let component: ArticlesSliderComponent;
  let fixture: ComponentFixture<ArticlesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
