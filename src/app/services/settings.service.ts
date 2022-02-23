import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  private settings: {
    gameMode: 'solo' | 'multi';
    maxNbAttempts: number;
    nbAvailableColors: number;
  } = {
    gameMode: 'solo',
    maxNbAttempts: 10,
    nbAvailableColors: 7
  };

  constructor() { }

  getSettings() {
    return this.settings;
  }

  updateSettings(gameMode: 'solo' | 'multi', maxNbAttempts: number, nbAvailableColors: number) {
    this.settings.gameMode = gameMode;
    this.settings.maxNbAttempts = maxNbAttempts;
    this.settings.nbAvailableColors = nbAvailableColors;
  }

}
