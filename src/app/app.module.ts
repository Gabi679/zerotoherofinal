import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app.routing.module';
import { AppComponent } from './app.component';
import { StopperComponent } from './stopper/stopper.component';

@NgModule({
  declarations: [
    AppComponent,
    StopperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
