import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService, PLAYER } from './player.service';
import { RegisterService } from './register.service';
import { TeamService, TEAM } from './teams.service';

export interface TEAMFULLINFO extends Omit<TEAM, 'idPlayers'> {
  players: PLAYER[];
}

interface TreeNode {
  name: string;
  children: TreeNode[];
}

@Injectable({
  providedIn: 'root',
})
export class TournInscriptionService {
  idEvent: string;
  idTourn: string;

  constructor(
    private registerS: RegisterService,
    private teamS: TeamService,
    private playerS: PlayerService,
    private route: ActivatedRoute
  ) {
    this.idEvent = this.route.snapshot.params['idEvent'];
    this.idTourn = this.route.snapshot.params['idTourn'];
  }

  getTeamsDisplayString(): string[] {
    let teams = this.teamS.getTeamsName();
    return teams.map((team) => {
      return team.name + ' - ' + team.id;
    });
  }

  getTeamFullInfo(idTeam: string): TEAMFULLINFO {
    let selected: TEAM = this.teamS.getTeamInfo(idTeam);
    return {
      id: selected.id,
      name: selected.name,
      level: selected.level,
      players: selected.idPlayers.map((idPlayer) => {
        return this.playerS.getPlayerInfo(idPlayer);
      }),
    };
  }
  getRegisteredFullDisplayString(): TreeNode[] {
    let registered = this.registerS.getRegisteredTeams(
      this.idEvent,
      this.idTourn
    );
    let teams: { id: string; name: string; idPlayers: string[] }[] =
      registered.map((idTeam) => {
        return this.teamS.getTeamInfo(idTeam);
      });
    return teams.map((team) => {
      return {
        name: team.name + ' - ' + team.id,
        children: team.idPlayers.map((idPlayer) => {
          let playerName = this.playerS.getPlayerName(idPlayer);
          return {
            name: playerName + ' - ' + idPlayer,
            children: [],
          };
        }),
      };
    });
  }
}
