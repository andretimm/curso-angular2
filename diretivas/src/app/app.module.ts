import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DeretivaNgswitchComponent } from './deretiva-ngswitch/deretiva-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DeretivaNgswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
