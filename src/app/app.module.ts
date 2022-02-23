import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolutionComponent } from './components/game/solution/solution.component';
import { EncoderComponent } from './components/game/encoder/encoder.component';
import { AttemptsPanelComponent } from './components/game/attempts-panel/attempts-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { GameComponent } from './components/game/game.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent,
    EncoderComponent,
    AttemptsPanelComponent,
    GameSettingsComponent,
    GameComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
