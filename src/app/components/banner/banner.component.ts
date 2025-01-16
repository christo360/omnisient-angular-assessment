import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls:['./banner.component.scss'],
  imports: [MatCardModule],
})
export class BannerComponent{
  @Input() imageURLInput!: string;
  @Input() primaryTextInput!: string;
  @Input() secondaryTextInput!: string;
}
