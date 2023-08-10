import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstudentlComponent } from './astudentl.component';

describe('AstudentlComponent', () => {
  let component: AstudentlComponent;
  let fixture: ComponentFixture<AstudentlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstudentlComponent]
    });
    fixture = TestBed.createComponent(AstudentlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
