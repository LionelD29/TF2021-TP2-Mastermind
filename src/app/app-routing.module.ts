import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { RulesComponent } from './components/rules/rules.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'settings', component: GameSettingsComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'game', component: GameComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: 'error'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }