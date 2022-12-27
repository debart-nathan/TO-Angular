import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { delay, timeout } from 'rxjs';

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

  teams: Array<{ id: number; name: string }>;
  isReadyPools: boolean = false;
  pools: Array<Array<number>> | undefined;

  checkoutFormPropr = this.formBuilder.group({
    topCut: 1,
    nR: 1,
    pWin: 1,
  });

  propr: { topCut: number; matches: { nR: number; pWin: number } } | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.teams = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
    ];
    this.formules = [
      [{ size: 1, count: 3 }],
      [
        { size: 2, count: 1 },
        { size: 1, count: 1 },
      ],
      [{ size: 3, count: 1 }],
    ];
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

    this.pools = [[0, 2], [1]];

    this.isReadyPools = true;
  }

  sendStage(): void {}

  toArray(answers: any) {
    return Object.keys(answers).map((key) => ({
      key,
      ...answers[key],
    }));
  }
}
