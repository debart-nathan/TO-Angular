import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoolService {
  static createPool(tournId: number, topCut: number | null | undefined): number {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}