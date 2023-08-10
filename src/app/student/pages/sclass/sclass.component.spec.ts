import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclassComponent } from './sclass.component';

describe('SclassComponent', () => {
  let component: SclassComponent;
  let fixture: ComponentFixture<SclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SclassComponent]
    });
    fixture = TestBed.createComponent(SclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
