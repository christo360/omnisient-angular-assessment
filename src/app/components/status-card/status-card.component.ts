import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss'],
  imports:[MatCardModule, NgClass]
})
export class StatusCardComponent {
  @Input() status!: string;
  @Input() selectedStatus!: string;
  @Output() statusSelected = new EventEmitter<string>();

  onCardClick(status: string) {
    this.statusSelected.emit(status);
  }
}
