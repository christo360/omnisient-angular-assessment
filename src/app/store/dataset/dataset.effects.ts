import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DatasetService } from '../../services/dataset.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadDatasets, loadDatasetsFailure, loadDatasetsSuccess } from './dataset.actions';

@Injectable()
export class DatasetEffects {
  private actions$ = inject(Actions);
  private datasetService = inject(DatasetService);

  loadDatasets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDatasets),
      switchMap(() =>
        this.datasetService.getDatasets().pipe(
          map(datasets => loadDatasetsSuccess({ datasets })),
          catchError(error => of(loadDatasetsFailure({ error })))
        )
      )
    )
  );
}
