import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquestionpaperComponent } from './squestionpaper.component';

describe('SquestionpaperComponent', () => {
  let component: SquestionpaperComponent;
  let fixture: ComponentFixture<SquestionpaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquestionpaperComponent]
    });
    fixture = TestBed.createComponent(SquestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
