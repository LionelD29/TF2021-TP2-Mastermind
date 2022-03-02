import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameRecord } from 'src/app/models/game-record.model';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy {

  records: GameRecord[] = [];

  gameRecord: GameRecord = {
    gameId: 6,
    playerName: 'TST',
    totalAttempts: 15,
    attemptsLeft: 6,
    hasWon: true
  };

  leaderboardSubscriber!: Subscription;
  subs!: Subscription;

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.leaderboardSubscriber = this.leaderboardService.getAll().subscribe(records => this.records = records);
  }

  onClick() {
    this.subs = this.leaderboardService.insertGameRecord(this.gameRecord).subscribe();
  }

  ngOnDestroy(): void {
      this.leaderboardSubscriber.unsubscribe();
      // this.subs.unsubscribe();
  }

  
}
