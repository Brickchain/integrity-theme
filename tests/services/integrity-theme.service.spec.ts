import { inject, TestBed } from '@angular/core/testing';

import { IntegrityThemeService } from './../../integrity-theme';

describe('IntegrityThemeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IntegrityThemeService
      ]
    });
  });

  it('switch theme',
    inject([IntegrityThemeService],
      (service: IntegrityThemeService) => {
      })
  );

});
