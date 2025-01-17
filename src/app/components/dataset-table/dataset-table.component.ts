import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Dataset } from '../../models/dataset.model';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.scss'],
  imports:[MatTableModule, DatePipe, MatPaginatorModule, MatIconModule]
})
export class DatasetTableComponent {
  @Input() dataSourceInput!: MatTableDataSource<Dataset>;
  @Input() displayedColumnsInput!: string[];
  @Input() paginatorInput!: MatPaginator;
  @Input() sortInput!: MatSort;
  @Output() datasetClickedOutput = new EventEmitter<Dataset>();

  @ViewChild(MatPaginator, { static: true }) childPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) childSort!: MatSort;

  ngAfterViewInit() {
    this.dataSourceInput.paginator = this.childPaginator;
    this.dataSourceInput.sort = this.childSort;
  }

  onDatasetClick(dataset: Dataset) {
    this.datasetClickedOutput.emit(dataset);
  }
}
