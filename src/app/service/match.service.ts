import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  static createMatch(poolId: number, teamAid: number, teamBid: number, nR: number | null | undefined, pWin: number | null | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
