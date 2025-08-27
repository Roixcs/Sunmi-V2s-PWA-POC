import { TestBed } from '@angular/core/testing';

import { FormFormatter } from './form-formatter';

describe('FormFormatter', () => {
  let service: FormFormatter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFormatter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
