import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { Dataset } from '../../models/dataset.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
  imports: [MatCardModule, MatIconModule, DatePipe],
})
export class ActivityCardComponent {
  @Input() selectedDatasetInput!: Dataset;
}
