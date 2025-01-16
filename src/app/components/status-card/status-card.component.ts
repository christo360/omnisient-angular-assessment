import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgClass } from '@angular/common';
import { StatusText } from '../../enums/status.enum';


@Component({
  selector: 'status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss'],
  imports: [MatCardModule, NgClass],
})
export class StatusCardComponent {
  @Input() status!: string;
  @Input() selectedStatus!: string;
  @Output() statusSelected = new EventEmitter<string>();

  statusDisplayText(status: string): string {
    return StatusText[status as keyof typeof StatusText] || status;
  }

  onCardClick(status: string) {
    this.statusSelected.emit(status);
  }
}
