import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule, DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';
import { DxBoxModule } from 'devextreme-angular';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { CandlesticksComponent } from './candlesticks/candlesticks.component';
import { DxChartModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailComponent,
    CandlesticksComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxBoxModule,
    HttpClientModule,
    DxChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
