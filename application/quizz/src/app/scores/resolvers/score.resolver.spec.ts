import { TestBed } from '@angular/core/testing';

import { ScoreResolver } from './score.resolver';

describe('ScoreResolver', () => {
  let resolver: ScoreResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ScoreResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
