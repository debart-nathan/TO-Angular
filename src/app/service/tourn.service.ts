import { Injectable } from '@angular/core';

export interface TOURN {
  id:string,
  idEvent:string;
  name:string,
  sport:string,
  level:string,
  active:boolean,
  pools:string[]
};
@Injectable({
  providedIn: 'root',
})
export class TournService {
  
  tourns :TOURN[] 

  constructor() {
    this.tourns = [{
      id: "3",
      idEvent: "", 
      name: "foobar",
      sport: "something",
      level: "something",
      active: true,
      pools: []
    }];
  }

  getTournInfo(idTourn: string):TOURN {
    let tourn :TOURN|undefined =this.tourns.find(tourn=>{return tourn.id==idTourn})
    if (tourn == undefined){
      throw new Error("tournament undefined");
    }
    return tourn
  }
}
