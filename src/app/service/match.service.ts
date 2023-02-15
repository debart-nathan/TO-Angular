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
    poolId: string,
    teamAid: string,
    teamBid: string,
    nR: number | null | undefined,
    pWin: number | null | undefined
  ) {
    throw new Error('Method not implemented.');
  }
}
