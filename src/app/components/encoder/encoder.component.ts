import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { Combination } from 'src/app/models/combination.model';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})
export class EncoderComponent implements OnInit {

  currentCombination: Combination = [];

  @Output('current-attempt')
  emitter = new EventEmitter<Combination>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectingColor(color: Color): void {
    if (this.currentCombination.length < 4) {
      this.currentCombination.push({
        color: color,
        status: undefined
      });
    } else {
      alert('4 colors are already selected. Reset or send this selection first.');
    }
  }

  onResetCombination(): void {
    this.currentCombination = [];
  }

  onSendCombination(): void {
    if (this.currentCombination.length === 4) {
      this.emitter.emit(this.currentCombination);
      this.onResetCombination();
    } else {
      alert('Select 4 colors before sending');
    }
  }

}
