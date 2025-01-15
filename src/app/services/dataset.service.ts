import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dataset } from '../models/dataset.model';


@Injectable({
  providedIn: 'root',
})
export class DatasetService {

  getDatasets(): Observable<Dataset[]> {
    const mockDatasets: Dataset[] = [
      { id: 1, name: 'Dataset 1', uploadedBy: 'User A', updateDate: new Date('2024-01-01'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 2, name: 'Dataset 2', uploadedBy: 'User B', updateDate: new Date('2024-01-10'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 3, name: 'Dataset 3', uploadedBy: 'User C', updateDate: new Date('2024-01-15'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 4, name: 'Dataset 4', uploadedBy: 'User D', updateDate: new Date('2024-01-20'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 5, name: 'Dataset 5', uploadedBy: 'User E', updateDate: new Date('2024-01-25'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 6, name: 'Dataset 6', uploadedBy: 'User F', updateDate: new Date('2024-02-01'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 7, name: 'Dataset 7', uploadedBy: 'User G', updateDate: new Date('2024-02-05'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 8, name: 'Dataset 8', uploadedBy: 'User H', updateDate: new Date('2024-02-10'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 9, name: 'Dataset 9', uploadedBy: 'User I', updateDate: new Date('2024-02-15'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 10, name: 'Dataset 10', uploadedBy: 'User J', updateDate: new Date('2024-02-20'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 11, name: 'Dataset 11', uploadedBy: 'User K', updateDate: new Date('2024-02-25'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 12, name: 'Dataset 12', uploadedBy: 'User L', updateDate: new Date('2024-03-01'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 13, name: 'Dataset 13', uploadedBy: 'User M', updateDate: new Date('2024-03-05'), uploaded: false, status: 'fail', containsPersonalInfo: true, containsErrors: true },
      { id: 14, name: 'Dataset 14', uploadedBy: 'User N', updateDate: new Date('2024-03-10'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 15, name: 'Dataset 15', uploadedBy: 'User O', updateDate: new Date('2024-03-15'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 16, name: 'Dataset 16', uploadedBy: 'User P', updateDate: new Date('2024-03-20'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 17, name: 'Dataset 17', uploadedBy: 'User Q', updateDate: new Date('2024-03-25'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 18, name: 'Dataset 18', uploadedBy: 'User R', updateDate: new Date('2024-04-01'), uploaded: false, status: 'fail', containsPersonalInfo: true, containsErrors: true },
      { id: 19, name: 'Dataset 19', uploadedBy: 'User S', updateDate: new Date('2024-04-05'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 20, name: 'Dataset 20', uploadedBy: 'User T', updateDate: new Date('2024-04-10'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 21, name: 'Dataset 21', uploadedBy: 'User U', updateDate: new Date('2024-04-12'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 22, name: 'Dataset 22', uploadedBy: 'User V', updateDate: new Date('2024-04-15'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 23, name: 'Dataset 23', uploadedBy: 'User W', updateDate: new Date('2024-04-18'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 24, name: 'Dataset 24', uploadedBy: 'User X', updateDate: new Date('2024-04-22'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 25, name: 'Dataset 25', uploadedBy: 'User Y', updateDate: new Date('2024-04-25'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 26, name: 'Dataset 26', uploadedBy: 'User Z', updateDate: new Date('2024-04-28'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 27, name: 'Dataset 27', uploadedBy: 'User AA', updateDate: new Date('2024-05-01'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 28, name: 'Dataset 28', uploadedBy: 'User AB', updateDate: new Date('2024-05-04'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 29, name: 'Dataset 29', uploadedBy: 'User AC', updateDate: new Date('2024-05-07'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 30, name: 'Dataset 30', uploadedBy: 'User AD', updateDate: new Date('2024-05-10'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 31, name: 'Dataset 31', uploadedBy: 'User AE', updateDate: new Date('2024-05-12'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 32, name: 'Dataset 32', uploadedBy: 'User AF', updateDate: new Date('2024-05-15'), uploaded: false, status: 'fail', containsPersonalInfo: true, containsErrors: true },
      { id: 33, name: 'Dataset 33', uploadedBy: 'User AG', updateDate: new Date('2024-05-18'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 34, name: 'Dataset 34', uploadedBy: 'User AH', updateDate: new Date('2024-05-20'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 35, name: 'Dataset 35', uploadedBy: 'User AI', updateDate: new Date('2024-05-22'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 36, name: 'Dataset 36', uploadedBy: 'User AJ', updateDate: new Date('2024-05-25'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 37, name: 'Dataset 37', uploadedBy: 'User AK', updateDate: new Date('2024-05-28'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 38, name: 'Dataset 38', uploadedBy: 'User AL', updateDate: new Date('2024-06-01'), uploaded: false, status: 'fail', containsPersonalInfo: true, containsErrors: true },
      { id: 39, name: 'Dataset 39', uploadedBy: 'User AM', updateDate: new Date('2024-06-04'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 40, name: 'Dataset 40', uploadedBy: 'User AN', updateDate: new Date('2024-06-07'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
    ];
    return of(mockDatasets);
  }
}
