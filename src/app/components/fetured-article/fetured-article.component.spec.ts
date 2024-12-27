import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeturedArticleComponent } from './fetured-article.component';

describe('FeturedArticleComponent', () => {
  let component: FeturedArticleComponent;
  let fixture: ComponentFixture<FeturedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeturedArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeturedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
