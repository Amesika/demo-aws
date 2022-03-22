import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDashComponent } from './score-dash.component';

describe('ScoreDashComponent', () => {
  let component: ScoreDashComponent;
  let fixture: ComponentFixture<ScoreDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
