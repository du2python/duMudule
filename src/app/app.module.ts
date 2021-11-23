import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuTestComponent } from './du-test/du-test.component';
import { DualertModule } from './dualert/dualert.module';

@NgModule({
  declarations: [
    AppComponent,
    DuTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DualertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
