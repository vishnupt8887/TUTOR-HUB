import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassignmentsComponent } from './sassignments.component';

describe('SassignmentsComponent', () => {
  let component: SassignmentsComponent;
  let fixture: ComponentFixture<SassignmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SassignmentsComponent]
    });
    fixture = TestBed.createComponent(SassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
