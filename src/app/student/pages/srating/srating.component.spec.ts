import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SratingComponent } from './srating.component';

describe('SratingComponent', () => {
  let component: SratingComponent;
  let fixture: ComponentFixture<SratingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SratingComponent]
    });
    fixture = TestBed.createComponent(SratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
