import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtutorlComponent } from './atutorl.component';

describe('AtutorlComponent', () => {
  let component: AtutorlComponent;
  let fixture: ComponentFixture<AtutorlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtutorlComponent]
    });
    fixture = TestBed.createComponent(AtutorlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
