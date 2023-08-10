import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TassignpdfComponent } from './tassignpdf.component';

describe('TassignpdfComponent', () => {
  let component: TassignpdfComponent;
  let fixture: ComponentFixture<TassignpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TassignpdfComponent]
    });
    fixture = TestBed.createComponent(TassignpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
