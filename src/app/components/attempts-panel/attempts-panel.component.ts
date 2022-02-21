import { Component, Input, OnInit } from '@angular/core';
import { Combination } from 'src/app/models/combination.model';

@Component({
  selector: 'app-attempts-panel',
  templateUrl: './attempts-panel.component.html',
  styleUrls: ['./attempts-panel.component.css']
})
export class AttemptsPanelComponent implements OnInit {

  @Input()
  attempts: Array<Combination> = [];

  constructor() { }

  ngOnInit(): void {
  }



}
