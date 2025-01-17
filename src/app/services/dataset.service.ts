import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dataset } from '../models/dataset.model';
import { mockDatasets } from '../mock/mock-dataset';

@Injectable({
  providedIn: 'root',
})
export class DatasetService {

  getDatasets(): Observable<Dataset[]> {
    return of(mockDatasets);
  }
}
