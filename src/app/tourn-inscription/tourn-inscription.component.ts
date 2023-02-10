import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TournInscriptionService, TEAMFULLINFO } from '../service/tourn-inscription.service';

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
  selectedTeamInfo!:TEAMFULLINFO
  selected: boolean = false;

  constructor(private tournIS: TournInscriptionService) {}
  hasNestedChild(index: number, nodeData: TreeNode) {
    return nodeData?.children?.length > 0;
  }

  ngOnInit() {
    this.teamListDisplayString = this.tournIS.getTeamsDisplayString();
  

    this.nestedDataSource.data = this.getRegisteredTree();
  }

  getRegisteredTree(): TreeNode[] {
    let registeredTree: TreeNode[] = this.tournIS.getRegisteredFullDisplayString();
    return registeredTree;
  }

  selectedTeam($event: string) {
    if (this.teamListDisplayString.indexOf($event)>-1) {
      let selectedTeamStrings = $event.split(' - ');
      let selectedTeamid = selectedTeamStrings[selectedTeamStrings.length - 1];
      this.selectedTeamInfo = this.tournIS.getTeamFullInfo(selectedTeamid);
      this.selected = true;
    }
  }
}
