import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GameRecord } from '../models/game-record.model';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private url: string = 'http://127.0.0.1:8080/mastermind';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<GameRecord[]>(this.url + '/leaderboard', {
      observe: 'body',
      responseType: 'json'
    });
  }

  insertGameRecord(gameRecord: GameRecord) {
    return this.http.post(this.url + '/leaderboard/add', gameRecord);
  }
}
