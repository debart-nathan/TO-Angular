import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TeamService } from '../service/teams.service';

import { TournRegisterService } from '../service/tourn-register.service';

interface TreeNode {
  name: string;
  children: TreeNode[];
}

@Component({
  selector: 'app-tourn-inscription',
  templateUrl: './tourn-inscription.component.html',
  styleUrls: ['./tourn-inscription.component.scss'],
})
export class TournInscriptionComponent {
  nestedDataSource = new MatTreeNestedDataSource<TreeNode>();
  nestedTreeControl = new NestedTreeControl<TreeNode>((node) => node.children);
  teamListDisplayString!: string[];
  selectedTeamInfo!: {
    id: string;
    name: string;
    level: string;
    players: {
      id: string;
      name: string;
      lastname: string;
    }[];
  };

  constructor(
    private tournRS: TournRegisterService,
    private teamS: TeamService
  ) {}
  hasNestedChild(index: number, nodeData: TreeNode) {
    return nodeData?.children?.length > 0;
  }

  ngOnInit() {
    this.teamListDisplayString = this.tournRS.teamList.map(function (item) {
      return item.name + ' - ' + item.id;
    });
    this.nestedDataSource.data = this.getRegisteredTree();
  }
  getRegisteredTree(): TreeNode[] {
    let registeredTree: TreeNode[] = [];
    let registered = this.tournRS.getRegistered();
    for (let team of registered) {
      let teamString = team.name + ' - ' + team.id;

      let players: TreeNode[] = [];
      for (let player of team.players) {
        let playerString =
          player.lastname + ' _ ' + player.name + ' - ' + player.id;
        players.push({
          name: playerString,
          children: [],
        });
      }

      registeredTree.push({
        name: teamString,
        children: players,
      });
    }
    return registeredTree;
  }

  selectedTeam($event: string) {
    let selectedTeamStrings = $event.split(' - ');
    let selectedTeamid = selectedTeamStrings[selectedTeamStrings.length - 1];
    this.selectedTeamInfo = this.teamS.getTeamFullInfo(selectedTeamid);
  }
}
