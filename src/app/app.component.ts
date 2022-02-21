import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from './models/color.model';
import { Combination } from './models/combination.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private colors: Array<Color> = [
    'green', 'blue', 'magenta', 'purple', 'yellow', 'maroon', 'orange'
  ];
  solutionFound: boolean = true;
  solution: Combination = [];
  attempts: Array<Combination> = [];

  ngOnInit(): void {
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
  }

  onToggleSolution(): void {
    this.solutionFound = !this.solutionFound;
  }

  onAddAttemptCombination(combination: Combination): void {
    this.attempts.push(this.checkAttempt(combination));
  }

  checkAttempt(attempt: Combination): Combination {
    // Update the status of each cell within the attempt
    return attempt;
  }
}
