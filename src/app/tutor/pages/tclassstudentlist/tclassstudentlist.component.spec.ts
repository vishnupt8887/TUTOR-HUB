import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TclassstudentlistComponent } from './tclassstudentlist.component';

describe('TclassstudentlistComponent', () => {
  let component: TclassstudentlistComponent;
  let fixture: ComponentFixture<TclassstudentlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TclassstudentlistComponent]
    });
    fixture = TestBed.createComponent(TclassstudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
