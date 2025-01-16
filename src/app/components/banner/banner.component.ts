import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls:['./banner.component.scss'],
  imports: [MatCardModule],
})
export class BannerComponent implements OnInit {



  ngOnInit() {

  }

}
