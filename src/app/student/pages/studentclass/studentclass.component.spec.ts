import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentclassComponent } from './studentclass.component';

describe('StudentclassComponent', () => {
  let component: StudentclassComponent;
  let fixture: ComponentFixture<StudentclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentclassComponent]
    });
    fixture = TestBed.createComponent(StudentclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
