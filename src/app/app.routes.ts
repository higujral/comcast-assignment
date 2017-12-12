import { Routes } from '@angular/router';
import { AppDataComponent } from './app-data/app-data.component';
import { AppRestructuredDataComponent } from './app-restructured-data/app-restructured-data.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppDataComponent
    },
    {
        path: 'modifieddata',
        component: AppRestructuredDataComponent
    }
]