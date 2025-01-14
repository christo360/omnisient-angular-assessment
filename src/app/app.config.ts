import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { DatasetEffects } from './store/dataset/dataset.effects';
import { datasetReducer } from './store/dataset/dataset.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({dataSets: datasetReducer}),
    provideEffects([DatasetEffects]),
  ],
};
