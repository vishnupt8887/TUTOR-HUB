import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TassignmentsComponent } from './tassignments.component';

describe('TassignmentsComponent', () => {
  let component: TassignmentsComponent;
  let fixture: ComponentFixture<TassignmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TassignmentsComponent]
    });
    fixture = TestBed.createComponent(TassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
