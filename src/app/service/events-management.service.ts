import { Injectable } from '@angular/core';

import { RoleAuthService } from './role-auth.service';
import { EventService } from './event.service';
import { MANAGED_EVENT } from '../interface-repos';


@Injectable({
  providedIn: 'root',
})
export class EventsManagementService {
  eventList: MANAGED_EVENT[];

  constructor(
    private RoleAuthS: RoleAuthService,
    private EventS: EventService
  ) {
    let eventIdList = RoleAuthS.getRoleEventList();
    this.eventList = eventIdList.map((event) => {
      let ev = EventS.getEventInfo(event.id);
      return { ...ev, ...{ role: event.role } };
    });
  }

  getActiveEvents(): MANAGED_EVENT [] {
    return this.eventList.filter((event) => {
      return this.EventS.isActive(event.id);
    });
  }

  getClosedEvents(): MANAGED_EVENT [] {
    return this.eventList.filter((event) => {
      return !(this.EventS.isActive(event.id));
    });
  }
}
