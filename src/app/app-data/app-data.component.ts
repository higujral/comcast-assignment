import { Component, OnInit } from '@angular/core';

import { AppDataService } from './app-data.service';
import { IAppData } from '../shared/models/IAppData';

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css'],
  providers: [ AppDataService ]
})
export class AppDataComponent implements OnInit {

  appData: IAppData [];

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.appDataService.getData().subscribe(data => {
      this.appData = <any>data;
    });
  }

}
