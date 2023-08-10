import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquespageComponent } from './squespage.component';

describe('SquespageComponent', () => {
  let component: SquespageComponent;
  let fixture: ComponentFixture<SquespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquespageComponent]
    });
    fixture = TestBed.createComponent(SquespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
