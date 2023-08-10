import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpaginationComponent } from './tpagination.component';

describe('TpaginationComponent', () => {
  let component: TpaginationComponent;
  let fixture: ComponentFixture<TpaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TpaginationComponent]
    });
    fixture = TestBed.createComponent(TpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
