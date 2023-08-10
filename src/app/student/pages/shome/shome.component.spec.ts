import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShomeComponent } from './shome.component';

describe('ShomeComponent', () => {
  let component: ShomeComponent;
  let fixture: ComponentFixture<ShomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShomeComponent]
    });
    fixture = TestBed.createComponent(ShomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
