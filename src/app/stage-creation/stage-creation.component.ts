import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { StageService } from '../service/stage.service';


@Component({
  selector: 'app-stage-creation',
  templateUrl: './stage-creation.component.html',
  styleUrls: ['./stage-creation.component.scss'],
})
export class StageCreationComponent {
  formules: Array<Array<{ size: number; count: number }>>;
  checkoutFormFormula = this.formBuilder.group({
    formulaIndex: 0,
  });
  distribution: Array<{ size: number; count: number }> | undefined;
  chosenFormulaIndex: number = -1;
  isChosenFormula: boolean = false;

  teams: { id: number; name: string }[][];
  isReadyPools: boolean = false;
  pools: { oldPool_num: number; oldTeam_num: number }[][] | undefined;

  checkoutFormPropr = this.formBuilder.group({
    topCut: 1,
    nR: 1,
    pWin: 1,
  });

  propr: { topCut: number; matches: { nR: number; pWin: number } } | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private stageService: StageService
  ) {
    this.teams = this.stageService.registeredTeams
    this.formules = this.stageService.generateFormules(this.teams.flat(1).length);
  }

  validateFormula(): void {
    let chosenFormulaIndex = this.checkoutFormFormula.value.formulaIndex;
    if (
      chosenFormulaIndex == null ||
      chosenFormulaIndex == undefined ||
      chosenFormulaIndex < 0 ||
      chosenFormulaIndex >= this.formules.length
    ) {
      this.isChosenFormula = false;
      console.log('formula undefined');
      return;
    }
    this.isChosenFormula = true;
    this.chosenFormulaIndex = chosenFormulaIndex;
    this.loadDefaultRepart();
  }

  async loadDefaultRepart(): Promise<void> {
    if (!this.isChosenFormula) {
      return;
    }
    this.isReadyPools = false;
    let distrib = await this.stageService.createDistribution(
      this.formules[this.chosenFormulaIndex]
    );
    if (distrib == null) {
      //toDO launch warning could not find the teams;
      return;
    }

    this.pools = distrib;

    this.isReadyPools = true;
  }

  sendStage(): void {}

  toArray(answers: any) {
    return Object.keys(answers).map((key) => ({
      key,
      ...answers[key],
    }));
  }

  drop(event: CdkDragDrop<{ oldPool_num: number; oldTeam_num: number }[], any, any>): void {
    let currentIndex: number = event.currentIndex;
    if (currentIndex >= event.container.data.length) {
      currentIndex = event.container.data.length - 1;
    }
    let oldtarget = event.previousContainer.data[event.previousIndex];
    event.previousContainer.data[event.previousIndex] =
      event.container.data[currentIndex];
    event.container.data[currentIndex] = oldtarget;
  }
}
