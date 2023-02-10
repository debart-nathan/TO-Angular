import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  getRegisteredTeams(idEvent: string, idTourn: string):string[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
