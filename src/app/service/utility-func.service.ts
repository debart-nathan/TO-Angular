import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityFuncService {

  constructor() { }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
