import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor() {}

  getFullSportTeamIdList(sport: string): string[] {
    return ['3'];
  }

  getTeamName(id: string): string {
    return 'foobarTeam';
  }

  getTeamFullInfo(id: string): {
    id: string;
    name: string;
    sport: string;
    level: string;
    players: {
      id: string;
      name: string;
      lastname: string;
      sport: string;
      level: string;
    }[];
  } {
    let fubarinfo = {
      id: '3',
      name: 'fubarTeam',
      sport: 'fubarsport',
      level: 'pro',
      playerId: ['4'],
    };
    return {
      id: fubarinfo.id,
      name: fubarinfo.name,
      sport: fubarinfo.sport,
      level: fubarinfo.sport,
      players: fubarinfo.playerId.map(function (pId) {
        return PlayerService.getPlayerInfo(pId);
      }),
    };
  }
}
