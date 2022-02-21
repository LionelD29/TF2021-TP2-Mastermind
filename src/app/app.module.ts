import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolutionComponent } from './components/solution/solution.component';
import { EncoderComponent } from './components/encoder/encoder.component';
import { AttemptsPanelComponent } from './components/attempts-panel/attempts-panel.component';
import { AttemptComponent } from './components/attempts-panel/attempt/attempt.component';

@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent,
    EncoderComponent,
    AttemptsPanelComponent,
    AttemptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
