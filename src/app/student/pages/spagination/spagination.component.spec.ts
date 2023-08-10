import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaginationComponent } from './spagination.component';

describe('SpaginationComponent', () => {
  let component: SpaginationComponent;
  let fixture: ComponentFixture<SpaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaginationComponent]
    });
    fixture = TestBed.createComponent(SpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
