import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TournService {
  tourn : {
    id:string,
    name:string,
    sport:string,

  };

  constructor() {
    this.tourn = {
      id: "3", //TODO replace by getting the id in the url
      name: "foobar",
      sport: "something"
    };
  }

  setTourn(id:string) {}

  getRegisteredTeamIdList():string[] {
    return ["3","4"]
  }

  getPoolIdList() {}

  getOpenPoolIdList() {}
}
