import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dataset } from '../models/dataset.model';


@Injectable({
  providedIn: 'root',
})
export class DatasetService {

  getDatasets(): Observable<Dataset[]> {
    const mockDatasets: Dataset[] = [
      {
        id: 1,
        name: 'Dataset 1',
        uploadedBy: 'User A',
        updateDate: new Date('2024-01-01'),
      },
      {
        id: 2,
        name: 'Dataset 2',
        uploadedBy: 'User B',
        updateDate: new Date('2024-01-10'),
      },
      {
        id: 3,
        name: 'Dataset 3',
        uploadedBy: 'User C',
        updateDate: new Date('2024-01-15'),
      },
    ];
    return of(mockDatasets);
  }
}
