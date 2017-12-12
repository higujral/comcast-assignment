import { Component, OnInit } from '@angular/core';

import { AppDataService } from '../shared/services/app-data.service';
import { IAppData } from '../shared/models/IAppData';

@Component({
  selector: 'app-app-restructured-data',
  templateUrl: './app-restructured-data.component.html',
  styleUrls: ['./app-restructured-data.component.css'],
  providers: [AppDataService]
})
export class AppRestructuredDataComponent implements OnInit {

  appData: IAppData[];
  restructuredData: any[] = [];

  sortedAscending: boolean;

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.appDataService.getData().subscribe(data => {
      this.appData = <any>data;
      this.restructureData();
      this.sort('name');
    });
  }

  restructureData() {
    this.appData.forEach((record, index, array) => {
      // for each record, find all records with that name (example: a1), 
      // then create new object for a1 and push into a new array
      if (!this.restructuredData.find(x => x.name === record.name)) {
        const objArray = array.filter(x => x.name === record.name);
        this.pushUpdatedObjectToArray(objArray);
      }
    });
  }

  pushUpdatedObjectToArray(filteredObjArray) {
    let modifiedObj = {};
    modifiedObj['name'] = filteredObjArray[0].name;
    filteredObjArray.forEach(record => {
      // make category value as key and assign amount as its value
      modifiedObj[record.category] = record.amount;
    });
    this.restructuredData.push(modifiedObj);
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
    this.restructuredData.sort((a, b) => {
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
    this.restructuredData.sort((a, b) => {
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