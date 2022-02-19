import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotEventComponent } from './hot-event/hot-event.component';
import { HttpClientModule } from '@angular/common/http';
import { HotViewPointComponent } from './hot-view-point/hot-view-point.component';


@NgModule({
  declarations: [
    AppComponent,
    HotEventComponent,
    HotViewPointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
