import { Routes } from '@angular/router';
import { DatasetListComponent } from './components/dataset-list.component';

export const routes: Routes = [
  { path: '**', component: DatasetListComponent },
];
