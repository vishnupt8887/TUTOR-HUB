import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsignupComponent } from './ssignup.component';

describe('SsignupComponent', () => {
  let component: SsignupComponent;
  let fixture: ComponentFixture<SsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsignupComponent]
    });
    fixture = TestBed.createComponent(SsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
