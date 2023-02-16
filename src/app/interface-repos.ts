export interface EVENT {
  id: string;
  name: string;
  location: string;
  date: Date;
  idTourns: string[];
}

export interface TOURN {
  id: string;
  idEvent: string;
  name: string;
  sport: string;
  level: string;
  active: boolean;
  pools: string[];
}

export interface MATCH {
  id: string;
  idPool: string;
  idTeamA: string;
  idTeamB: string;
  idWin: string;
  roundTWin: number;
  idrounds: string[];
}
export interface MANAGED_EVENT extends EVENT {
  role: string;
}

export interface MANAGED_TOURN extends TOURN {
  role: string;
}

export interface MANAGED_MATCH extends MATCH {
  idEvent: string;
  nameEvent: string;
  idTourn: string;
  nameTourn: string;
  stage: number;
  role: string;
}

export interface EVENT_FULL_INFO extends EVENT {
  description: string;
  tourns: MANAGED_TOURN[];
}
