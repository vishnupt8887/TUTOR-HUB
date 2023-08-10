import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemomodalComponent } from './demomodal.component';

describe('DemomodalComponent', () => {
  let component: DemomodalComponent;
  let fixture: ComponentFixture<DemomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemomodalComponent]
    });
    fixture = TestBed.createComponent(DemomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
