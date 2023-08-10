import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslandComponent } from './classland.component';

describe('ClasslandComponent', () => {
  let component: ClasslandComponent;
  let fixture: ComponentFixture<ClasslandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasslandComponent]
    });
    fixture = TestBed.createComponent(ClasslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
