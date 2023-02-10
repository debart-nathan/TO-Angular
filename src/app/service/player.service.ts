import { Injectable } from '@angular/core';

export interface PLAYER {
  id: string;
  name: string;
  lastname: string;
  sport: string;
  level: string;
}
@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  
  players?: PLAYER[];

  constructor() {}

  getPlayerInfo(idPlayer: string): PLAYER {
    let player = this.players?.find((player) => {
      player.id == idPlayer;
    });
    if (player == undefined) {
      throw new Error('player undefined');
    }
    return player;
  }

  getPlayerName(idPlayer: string):string {
    let player = this.players?.find((player) => {
      player.id == idPlayer;
    });
    if (player == undefined) {
      throw new Error('player undefined');
    }
    return player.name;
  }
}
