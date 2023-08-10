import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclassdetComponent } from './sclassdet.component';

describe('SclassdetComponent', () => {
  let component: SclassdetComponent;
  let fixture: ComponentFixture<SclassdetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SclassdetComponent]
    });
    fixture = TestBed.createComponent(SclassdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
