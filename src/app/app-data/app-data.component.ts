import { Component, OnInit } from '@angular/core';

import { AppDataService } from './app-data.service';
import { IAppData } from '../shared/models/IAppData';

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css'],
  providers: [AppDataService]
})
export class AppDataComponent implements OnInit {

  appData: IAppData[];
  sortedAscending: boolean;

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.appDataService.getData().subscribe(data => {
      this.appData = <any>data;
    });
  }

  sort(property) {
    if (!this.sortedAscending) {
      this.sortAcending(property);
      this.sortedAscending = true;
    } else {
      this.sortDescending(property);
      this.sortedAscending = false;
    }
  }

  sortAcending(property) {
    this.appData.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  }

  sortDescending(property) {
    this.appData.sort((a, b) => {
      if (a[property] < b[property]) {
        return 1;
      }
      if (a[property] > b[property]) {
        return -1;
      }
      return 0;
    });
  }

}
