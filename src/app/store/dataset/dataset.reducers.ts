import { createReducer, on } from '@ngrx/store';
import { loadDatasets, loadDatasetsFailure, loadDatasetsSuccess } from './dataset.actions';
import { initialState } from './dataset.state';

export const datasetsReducer = createReducer(
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
