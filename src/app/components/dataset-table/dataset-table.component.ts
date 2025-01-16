// dataset-table.component.ts
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Dataset } from '../../models/dataset.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.scss'],
  imports:[MatTableModule, DatePipe, MatPaginatorModule]
})
export class DatasetTableComponent {
  @Input() dataSource!: MatTableDataSource<Dataset>;
  @Input() displayedColumns!: string[];
  @Input() paginator!: MatPaginator;
  @Input() sort!: MatSort;
  @Output() datasetClicked = new EventEmitter<Dataset>();

  @ViewChild(MatPaginator, { static: true }) childPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) childSort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.childPaginator;
    this.dataSource.sort = this.childSort;
  }

  onDatasetClick(dataset: Dataset) {
    this.datasetClicked.emit(dataset);
  }
}
