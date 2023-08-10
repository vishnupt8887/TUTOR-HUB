import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdetComponent } from './classdet.component';

describe('ClassdetComponent', () => {
  let component: ClassdetComponent;
  let fixture: ComponentFixture<ClassdetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassdetComponent]
    });
    fixture = TestBed.createComponent(ClassdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
