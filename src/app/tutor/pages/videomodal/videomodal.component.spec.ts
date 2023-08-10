import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideomodalComponent } from './videomodal.component';

describe('VideomodalComponent', () => {
  let component: VideomodalComponent;
  let fixture: ComponentFixture<VideomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideomodalComponent]
    });
    fixture = TestBed.createComponent(VideomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
