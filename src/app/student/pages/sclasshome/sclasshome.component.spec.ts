import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclasshomeComponent } from './sclasshome.component';

describe('SclasshomeComponent', () => {
  let component: SclasshomeComponent;
  let fixture: ComponentFixture<SclasshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SclasshomeComponent]
    });
    fixture = TestBed.createComponent(SclasshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
