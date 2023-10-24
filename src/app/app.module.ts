import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DatabidingComponent } from './databiding/databiding.component';
import { FormsModule } from '@angular/forms';
import { DeiretivasEstruturaisComponent } from './deiretivas-estruturais/deiretivas-estruturais.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DatabidingComponent,
    DeiretivasEstruturaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
