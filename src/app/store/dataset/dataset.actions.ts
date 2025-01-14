import { createAction, props } from '@ngrx/store';
import { Dataset } from '../../models/dataset.model';


export const loadDatasets = createAction('[Dataset] Load Datasets');

export const loadDatasetsSuccess = createAction(
  '[Dataset] Load Datasets Success',
  props<{ datasets: Dataset[] }>()
);

export const loadDatasetsFailure = createAction(
  '[Dataset] Load Datasets Failure',
  props<{ error: any }>()
);
