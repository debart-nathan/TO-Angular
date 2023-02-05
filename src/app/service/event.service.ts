import { Injectable } from '@angular/core';

export interface EVENT {
  id: string;
  name: string;
  location: string;
  date: Date;
  idTourns: string[];
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEventInfo(idEvent: string): EVENT {
    return {
      id: "3",
      name: "test",
      location: "string",
      date: new Date(),
      idTourns: ["9"]
    }
    //TODO get request event
  }
  isActive(idEvent: string): boolean {

    //TODO get request is Date passed and all tourn finished
    return true;
  }

  constructor() {}
}

