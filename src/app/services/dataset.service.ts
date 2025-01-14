import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dataset } from '../models/dataset.model';


@Injectable({
  providedIn: 'root',
})
export class DatasetService {

  getDatasets(): Observable<Dataset[]> {
    const mockDatasets: Dataset[] = [
      { id: 1, name: 'Dataset 1', uploadedBy: 'User A', updateDate: new Date('2024-01-01') },
      { id: 2, name: 'Dataset 2', uploadedBy: 'User B', updateDate: new Date('2024-01-10') },
      { id: 3, name: 'Dataset 3', uploadedBy: 'User C', updateDate: new Date('2024-01-15') },
      { id: 4, name: 'Dataset 4', uploadedBy: 'User D', updateDate: new Date('2024-01-20') },
      { id: 5, name: 'Dataset 5', uploadedBy: 'User E', updateDate: new Date('2024-01-25') },
      { id: 6, name: 'Dataset 6', uploadedBy: 'User F', updateDate: new Date('2024-02-01') },
      { id: 7, name: 'Dataset 7', uploadedBy: 'User G', updateDate: new Date('2024-02-05') },
      { id: 8, name: 'Dataset 8', uploadedBy: 'User H', updateDate: new Date('2024-02-10') },
      { id: 9, name: 'Dataset 9', uploadedBy: 'User I', updateDate: new Date('2024-02-15') },
      { id: 10, name: 'Dataset 10', uploadedBy: 'User J', updateDate: new Date('2024-02-20') },
      { id: 11, name: 'Dataset 11', uploadedBy: 'User K', updateDate: new Date('2024-02-25') },
      { id: 12, name: 'Dataset 12', uploadedBy: 'User L', updateDate: new Date('2024-03-01') },
      { id: 13, name: 'Dataset 13', uploadedBy: 'User M', updateDate: new Date('2024-03-05') },
      { id: 14, name: 'Dataset 14', uploadedBy: 'User N', updateDate: new Date('2024-03-10') },
      { id: 15, name: 'Dataset 15', uploadedBy: 'User O', updateDate: new Date('2024-03-15') },
      { id: 16, name: 'Dataset 16', uploadedBy: 'User P', updateDate: new Date('2024-03-20') },
      { id: 17, name: 'Dataset 17', uploadedBy: 'User Q', updateDate: new Date('2024-03-25') },
      { id: 18, name: 'Dataset 18', uploadedBy: 'User R', updateDate: new Date('2024-04-01') },
      { id: 19, name: 'Dataset 19', uploadedBy: 'User S', updateDate: new Date('2024-04-05') },
      { id: 20, name: 'Dataset 20', uploadedBy: 'User T', updateDate: new Date('2024-04-10') },
    ];
    return of(mockDatasets);
  }
}
