import { createReducer, on } from '@ngrx/store';
import { Dataset } from '../../models/dataset.model';
import { loadDatasets, loadDatasetsFailure, loadDatasetsSuccess } from './dataset.actions';

export interface DatasetState {
  datasets: Dataset[];
  loading: boolean;
  error: any;
}

export const initialState: DatasetState = {
  datasets: [],
  loading: false,
  error: null,
};

export const datasetReducer = createReducer(
  initialState,
  on(loadDatasets, state => ({ ...state, loading: true })),
  on(loadDatasetsSuccess, (state, { datasets }) => ({
    ...state,
    loading: false,
    datasets,
  })),
  on(loadDatasetsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
