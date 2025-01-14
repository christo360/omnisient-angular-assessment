// src/app/store/facades/dataset.facade.ts

import { inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Dataset } from '../dataset.model';
import { selectDatasets, selectDatasetsError, selectDatasetsLoading } from '../../store/dataset/dataset.selectors';
import { loadDatasets } from '../../store/dataset/dataset.actions';

@Injectable({
  providedIn: 'root',
})
export class DatasetFacade {
  private store = inject(Store);

  datasets$: Observable<Dataset[]> = this.store.pipe(select(selectDatasets));
  loading$: Observable<boolean> = this.store.pipe(select(selectDatasetsLoading));
  error$: Observable<any> = this.store.pipe(select(selectDatasetsError));

  loadDatasets() {
    this.store.dispatch(loadDatasets());
  }
}

