import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStoryScrollListComponent } from './horizontal-story-scroll-list.component';

describe('HorizontalStoryScrollListComponent', () => {
  let component: HorizontalStoryScrollListComponent;
  let fixture: ComponentFixture<HorizontalStoryScrollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalStoryScrollListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalStoryScrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
