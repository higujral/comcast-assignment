import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppDataComponent } from './app-data/app-data.component';
import { appRoutes } from './app.routes';
import { AppRestructuredDataComponent } from './app-restructured-data/app-restructured-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDataComponent,
    AppRestructuredDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
