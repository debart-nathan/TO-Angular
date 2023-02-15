import { Injectable } from '@angular/core';

import { RoundService } from './round.service';

export interface MATCH {
  id: string;
  idPool: string;
  idTeamA: string;
  idTeamB: string;
  idWin: string;
  roundTWin: number;
  idrounds:string[]
}

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  getMatch(matchId: string): MATCH {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  static createMatch(
    poolId: number,
    teamAid: number,
    teamBid: number,
    nR: number | null | undefined,
    pWin: number | null | undefined
  ) {
    throw new Error('Method not implemented.');
  }
}
