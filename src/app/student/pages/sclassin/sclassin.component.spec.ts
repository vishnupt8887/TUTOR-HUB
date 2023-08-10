import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclassinComponent } from './sclassin.component';

describe('SclassinComponent', () => {
  let component: SclassinComponent;
  let fixture: ComponentFixture<SclassinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SclassinComponent]
    });
    fixture = TestBed.createComponent(SclassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
