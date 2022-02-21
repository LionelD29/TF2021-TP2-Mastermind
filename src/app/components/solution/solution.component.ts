import { Component, Input, OnInit } from '@angular/core';
import { Combination } from 'src/app/models/combination.model';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  @Input()
  solution!: Combination;

  constructor() { }

  ngOnInit(): void {
    console.log(this.solution);
  }

}
