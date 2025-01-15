import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


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
}


