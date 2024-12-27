import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightArticleComponent } from './highlight-article.component';

describe('HighlightArticleComponent', () => {
  let component: HighlightArticleComponent;
  let fixture: ComponentFixture<HighlightArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
