import { Injectable } from '@angular/core';
import { EVENT } from '../interface-repos';


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

