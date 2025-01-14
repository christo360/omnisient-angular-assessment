import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DatasetState } from './dataset.reducers';


export const selectDatasetState = createFeatureSelector<DatasetState>('dataset');

export const selectDatasets = createSelector(
  selectDatasetState,
  (state: DatasetState) => state.datasets
);

export const selectDatasetsLoading = createSelector(
  selectDatasetState,
  (state: DatasetState) => state.loading
);

export const selectDatasetsError = createSelector(
  selectDatasetState,
  (state: DatasetState) => state.error
);
