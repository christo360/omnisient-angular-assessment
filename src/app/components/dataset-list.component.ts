import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Dataset } from '../models/dataset.model';
import { DatasetFacade } from '../models/facades/dataset.facade';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls:['./dataset-list.component.scss'],
  imports: [DatePipe, MatTableModule, MatPaginator, MatCardModule],
})
export class DatasetListComponent implements OnInit, OnDestroy {
  datasets$!: Observable<MatTableDataSource<Dataset>>;
  datasets: Dataset[] = [];
  displayedColumns: string[] = ['id', 'name', 'uploadedBy', 'updateDate', 'actions'];
  dataSource: MatTableDataSource<Dataset> = new MatTableDataSource();

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
}
