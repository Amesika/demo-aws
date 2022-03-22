import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDashComponent } from './start-dash.component';

describe('StartDashComponent', () => {
  let component: StartDashComponent;
  let fixture: ComponentFixture<StartDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
