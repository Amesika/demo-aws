import { TestBed } from '@angular/core/testing';

import { ScoresResolver } from './scores.resolver';

describe('ScoresResolver', () => {
  let resolver: ScoresResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ScoresResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
