import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DatasetState } from './dataset.state';


export const selectDatasetState = createFeatureSelector<DatasetState>('datasets');

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
