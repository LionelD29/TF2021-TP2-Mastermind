import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolutionComponent } from './components/game/solution/solution.component';
import { EncoderComponent } from './components/game/encoder/encoder.component';
import { AttemptsPanelComponent } from './components/game/attempts-panel/attempts-panel.component';
import { AttemptComponent } from './components/game/attempts-panel/attempt/attempt.component';
import { AppRoutingModule } from './app-routing.module';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { GameComponent } from './components/game/game.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent,
    EncoderComponent,
    AttemptsPanelComponent,
    AttemptComponent,
    GameSettingsComponent,
    GameComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
