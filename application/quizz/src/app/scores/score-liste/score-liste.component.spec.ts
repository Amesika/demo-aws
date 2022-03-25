import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreListeComponent } from './score-liste.component';

describe('ScoreListeComponent', () => {
  let component: ScoreListeComponent;
  let fixture: ComponentFixture<ScoreListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
