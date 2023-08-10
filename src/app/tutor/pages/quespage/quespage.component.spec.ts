import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuespageComponent } from './quespage.component';

describe('QuespageComponent', () => {
  let component: QuespageComponent;
  let fixture: ComponentFixture<QuespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuespageComponent]
    });
    fixture = TestBed.createComponent(QuespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
