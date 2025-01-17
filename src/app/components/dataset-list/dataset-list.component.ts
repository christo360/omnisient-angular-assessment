import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Dataset } from '../../models/dataset.model';
import { DatasetFacade } from '../../facades/dataset.facade';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { BannerComponent } from '../banner/banner.component';
import { StatusCardComponent } from "../status-card/status-card.component";
import { DatasetTableComponent } from '../dataset-table/dataset-table.component';
import { DatasetCardComponent } from '../dataset-card/dataset-card.component';

@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls:['./dataset-list.component.scss'],
  imports: [MatTableModule, MatCardModule, BannerComponent, StatusCardComponent, StatusCardComponent, DatasetTableComponent, DatasetCardComponent],
})
export class DatasetListComponent implements OnInit, OnDestroy {
  datasets$!: Observable<MatTableDataSource<Dataset>>;
  datasets: Dataset[] = [];

  displayedColumns: string[] = ['id', 'name', 'uploadedBy', 'updateDate', 'actions'];
  displayedSideColumns: string[] = ['name', 'updateDate'];

  statuses: string[] = ['review', 'fail', 'shares'];

  dataSource: MatTableDataSource<Dataset> = new MatTableDataSource();
  sideTableDataSource: MatTableDataSource<Dataset> = new MatTableDataSource();

  selectedCard = '';
  bannerImageUrl = 'assets/cta-banner.png';
  bannerPrimaryText = 'Welcome, Jennifer';
  bannerSecondaryText = 'You have 2 notifications';
  datasetCardTitle = 'Recently available datasets';

  selectedDataset!: Dataset;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  private datasetFacade = inject(DatasetFacade);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.datasetFacade.loadDatasets()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (datasets) => {
        this.datasets = datasets;
        this.dataSource.data = datasets;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.sideTableDataSource.data = datasets;
        this.filterDatasetsByStatus('review');
      },
      error: (err) => {
        this.datasets = [];
        console.error('Error loading datasets', err);
      },
      complete: () => {
        console.log('Dataset loading completed');
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  filterDatasetsByStatus(status: string) {
    this.selectedCard = status;
    const filteredDatasets = this.datasets.filter(dataset => dataset.status === status);
    this.dataSource.data = filteredDatasets;
  }

  onDatasetClick(dataset: Dataset) {
    this.selectedDataset = dataset;
  }
}
