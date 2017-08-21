import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXM5GWCcqGGQWIAMov2ubUcTaTHAIDoPY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
