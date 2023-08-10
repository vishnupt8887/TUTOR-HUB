import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoastrateComponent } from './stoastrate.component';

describe('StoastrateComponent', () => {
  let component: StoastrateComponent;
  let fixture: ComponentFixture<StoastrateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoastrateComponent]
    });
    fixture = TestBed.createComponent(StoastrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
