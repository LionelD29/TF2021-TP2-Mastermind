import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit {

  // The form will update the variables within the injected instance of the
  // SettingsService class, so it will be possible to retrieve them through the 
  // router-outlet tag in the GameComponent 

  form: FormGroup = new FormGroup({
    'gameMode': new FormControl(),
    'maxNbAttempts': new FormControl(),
    'nbAvailableColors': new FormControl()
  });

  constructor(private settingsService: SettingsService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Send the settings to the instance of the service
    let gameMode: 'solo' | 'multi' = this.form.value.gameMode;
    let maxNbAttempts: number = this.form.value.maxNbAttempts;
    let nbAvailableColors: number = this.form.value.nbAvailableColors;

    console.log(maxNbAttempts);
    
    let validAttemptsNumber: boolean = maxNbAttempts !== null && maxNbAttempts > 0 && maxNbAttempts <= 15;
    if (validAttemptsNumber) {
      this.settingsService.updateSettings(
        gameMode !== null ? gameMode : 'solo',
        maxNbAttempts,
        nbAvailableColors !== null ? nbAvailableColors : 7
      );
      this.router.navigate(['/game']);
    } else if (maxNbAttempts === null) {
      this.settingsService.updateSettings(
        gameMode !== null ? gameMode : 'solo',
        10,
        nbAvailableColors !== null ? nbAvailableColors : 7
      );
      this.router.navigate(['/game']);
    } else {
      alert('Please select a number of attempts between 0 and 16 excluded');
    }
  }
}
