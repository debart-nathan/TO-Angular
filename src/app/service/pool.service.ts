import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoolService {
  getPool(idPool: string): { stage: number; idTourn: string; } {
    throw new Error('Method not implemented.');
  }
  static createPool(tournId: number, topCut: number | null | undefined): number {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
