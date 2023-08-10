import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvideoComponent } from './tvideo.component';

describe('TvideoComponent', () => {
  let component: TvideoComponent;
  let fixture: ComponentFixture<TvideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvideoComponent]
    });
    fixture = TestBed.createComponent(TvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
