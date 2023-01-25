import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  static getPlayerInfo(id: string): {
    id: string;
    name: string;
    lastname: string;
    sport: string;
    level: string;
  } {
    return {
      id: '4',
      name: 'jhon',
      lastname: 'string',
      sport: 'fubarSport',
      level: 'pro',
    };
  }
}
