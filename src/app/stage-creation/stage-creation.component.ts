import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stage-creation',
  templateUrl: './stage-creation.component.html',
  styleUrls: ['./stage-creation.component.scss'],
})
export class StageCreationComponent {
  teams: Array<{ id: number; name: string }>;
  formules: Array<Array<{ size: number; count: number }>>;
  checkoutFormFormula = this.formBuilder.group({
    formulaIndex: 0
  });


  distribution: Array<{ size: number; count: number }> | undefined;
  
  topCut: number | undefined;
  poule: Array<Array<number>> | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.teams = [{ id: 1, name: 'test1' }];
    this.formules = [
      [{ size: 1, count: 3 }],
      [
        { size: 2, count: 1 },
        { size: 1, count: 1 },
      ],
      [{ size: 3, count: 1 }],
    ];
  }

  validateFormula():void {
    let formulaIndex = this.checkoutFormFormula.value.formulaIndex
    if (formulaIndex!=null && formulaIndex != undefined){
      let index:number = formulaIndex;
      console.log(this.formules[index]);
    }else{
      console.log("formula undefined")
    }
  }

  toArray(answers: any) {
    return Object.keys(answers).map((key) => ({
      key,
      ...answers[key],
    }));
  }
}
