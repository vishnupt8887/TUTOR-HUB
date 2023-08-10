import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TquestionpaperComponent } from './tquestionpaper.component';

describe('TquestionpaperComponent', () => {
  let component: TquestionpaperComponent;
  let fixture: ComponentFixture<TquestionpaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TquestionpaperComponent]
    });
    fixture = TestBed.createComponent(TquestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
