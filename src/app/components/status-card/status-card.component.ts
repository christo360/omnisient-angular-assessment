import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgClass } from '@angular/common';
import { StatusText } from '../../enums/status.enum';
import { Observable } from 'rxjs';
import { DatasetFacade } from '../../facades/dataset.facade';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss'],
  imports: [MatCardModule, NgClass, AsyncPipe, MatIconModule],
})
export class StatusCardComponent implements OnInit {
  @Input() statusInput!: string;
  @Input() selectedStatusInput!: string;
  @Output() statusSelectedOutput = new EventEmitter<string>();

  statusCount$!: Observable<number>;

  private datasetFacade = inject(DatasetFacade);

  ngOnInit() {
    this.statusCount$ = this.datasetFacade.getStatusCount(this.statusInput);
  }

  statusDisplayText(status: string): string {
    return StatusText[status as keyof typeof StatusText] || status;
  }

  onCardClick(status: string) {
    this.statusSelectedOutput.emit(status);
  }

  getStatusColorClass(): string {
    return this.statusInput === 'review' || this.statusInput === 'shares'
      ? 'green-icon'
      : this.statusInput === 'fail'
      ? 'red-icon'
      : '';
  }
}
