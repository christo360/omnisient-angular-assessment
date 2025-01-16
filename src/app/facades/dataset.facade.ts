import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { Dataset } from '../models/dataset.model';
import { loadDatasets } from '../store/dataset/dataset.actions';
import { selectDatasets } from '../store/dataset/dataset.selectors';

@Injectable({
  providedIn: 'root',
})
export class DatasetFacade {
  private store = inject(Store);

  datasets$: Observable<Dataset[]> = this.store.select(selectDatasets);

  loadDatasets(): Observable<Dataset[]> {
    this.store.dispatch(loadDatasets());
    return this.datasets$;
  }

  getStatusCount(status: string): Observable<number> {
    return this.datasets$.pipe(
      map((datasets: Dataset[]) => {
        return datasets.filter(dataset => dataset.status === status).length;
      })
    );
  }
}


