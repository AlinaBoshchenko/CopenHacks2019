import { TestBed, inject } from '@angular/core/testing';

import { RequestTranslationService } from './request-translation.service';
import {beforeEach, describe, expect, it} from "@angular/core/testing/src/testing_internal";

describe('RequestTranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestTranslationService]
    });
  });

  it('should be created', inject([RequestTranslationService], (service: RequestTranslationService) => {
    expect(service).toBeTruthy();
  }));
});
