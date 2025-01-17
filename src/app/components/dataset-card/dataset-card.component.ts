import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Dataset } from '../../models/dataset.model';

@Component({
  selector: 'dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.scss'],
  imports: [MatCardModule, MatIconModule, DatePipe],
})
export class DatasetCardComponent implements OnInit {
  @Input() datasetInput!: Dataset[];
  @Input() titleInput!: string;

  limitedDatasetInput: Dataset[] = [];

  ngOnInit() {
    this.limitedDatasetInput = this.datasetInput.slice(0, 4);
  }
}

