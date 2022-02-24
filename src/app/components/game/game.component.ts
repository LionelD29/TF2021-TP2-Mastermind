import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { Combination } from 'src/app/models/combination.model';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private colors: Array<Color> = [
    'green', 'blue', 'magenta', 'purple', 'yellow', 'maroon', 'cyan'
  ];
  // solutionFound: boolean = true;
  solution!: Combination;
  attempts!: Array<Combination>;
  win!: boolean | undefined;
  attemptsLeft!: number;

  settings!: {
    gameMode: 'solo' | 'multi';
    maxNbAttempts: number;
    nbAvailableColors: number;
  }

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.solution = [];
    this.attempts = [];
    this.win = undefined;

    this.settings = this.settingsService.getSettings();

    this.attemptsLeft = this.settings.maxNbAttempts;

    if (this.settings.gameMode === 'solo') {
      // Generate random combination
      let randomIndex: number;
      for (let i = 0; i < 4; i++) {
        // generate a random number in the range 0 - 6
        randomIndex = Math.floor(Math.random() * (this.colors.length));
        this.solution.push({
          color: this.colors[randomIndex],
          status: undefined
        })
      }
    } else {
      alert('game mode: multiplayer ||| Player 2 must select a solution to be found by player 1');
    }
  }

  onAddAttemptCombination(combination: Combination): void {
    if (this.solution.length === 0 && this.settings.gameMode === 'multi') { // Selection of the solution by a player
      this.solution = combination;
      alert('The solution has been chosen by player 2');
    } else {
      this.attempts.push(this.checkAttempt(combination));
      this.attemptsLeft--;
      if (this.attemptsLeft === 0 && this.win == undefined) {
        this.win = false;
      }
      if (this.win === true) {
        alert('You win! Congratulation!');
      } else if (this.win === false) {
        alert('You lost... More luck next time!');
      }
    }
    
  }

  checkAttempt(attempt: Combination): Combination {
    // Update the status of each cell within the attempt
    let correctCount: number = 0;
    let wrongCount: number = 0;

    // First the correct cells
    for (let i = 0; i < attempt.length; i++) {
      if (attempt[i].color === this.solution[i].color) {
        attempt[i].status = 'correct';
        correctCount++;
      }
    }

    // If each cell is not correct, then attribute the wrong position or wrong color status
    // Else, it is won
    if (correctCount !== attempt.length) {
      for (let i = 0; i < attempt.length; i++) {
        if (attempt[i].status !== 'correct') {
          for (let j = 0; j < attempt.length; j++) {
            if (j !== i && 
                attempt[i].color === this.solution[j].color &&
                attempt[j].status !== 'correct') {
              attempt[i].status = 'wrong-position';
            } else {
              wrongCount++;
            }
          }
          // If no wrong-position is found, it is therefore a wrong-color
          if (wrongCount === attempt.length) {
            attempt[i].status = 'wrong-color';
          }
          wrongCount = 0;
        }
      }
    } else {
      this.win = true;
    }
    correctCount = 0;
    
    return attempt;
  }

}
