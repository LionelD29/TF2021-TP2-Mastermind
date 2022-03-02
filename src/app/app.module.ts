import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { AttemptsPanelComponent } from './components/game/attempts-panel/attempts-panel.component';
import { EncoderComponent } from './components/game/encoder/encoder.component';
import { GameComponent } from './components/game/game.component';
import { SolutionComponent } from './components/game/solution/solution.component';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RulesComponent } from './components/rules/rules.component';
import { LeaderboardService } from './services/leaderboard.service';
import { SettingsService } from './services/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent,
    EncoderComponent,
    AttemptsPanelComponent,
    GameSettingsComponent,
    GameComponent,
    ErrorPageComponent,
    NavbarComponent,
    HomeComponent,
    RulesComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    LeaderboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
