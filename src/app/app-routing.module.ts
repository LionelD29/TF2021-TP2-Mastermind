import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full'},
    { path: 'settings', component: GameSettingsComponent },
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