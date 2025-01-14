import { Dataset } from "../../models/dataset.model";

export interface DatasetState {
  datasets: Dataset[];
  loading: boolean;
  error: string | null;
}

export const initialState: DatasetState = {
  datasets: [],
  loading: false,
  error: null,
};
