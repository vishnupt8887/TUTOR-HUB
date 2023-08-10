import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsidebarComponent } from './tsidebar.component';

describe('TsidebarComponent', () => {
  let component: TsidebarComponent;
  let fixture: ComponentFixture<TsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsidebarComponent]
    });
    fixture = TestBed.createComponent(TsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
