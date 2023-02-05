import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import {
  EventsManagementService,
  MANAGED_EVENT,
} from '../service/events-management.service';

@Component({
  selector: 'app-events-management',
  templateUrl: './events-management.component.html',
  styleUrls: ['./events-management.component.scss'],
})
export class EventsManagementComponent {
  activeEventList: MatTableDataSource<MANAGED_EVENT>;
  closedEventList: MatTableDataSource<MANAGED_EVENT>;
  closedToggle = false;

  displayedColumns = ['edit','idEvent', 'name', 'role', 'date', 'location'];

  @ViewChild(MatPaginator)
  activePaginator!: MatPaginator;
  @ViewChild(MatPaginator)
  closedPaginator!: MatPaginator;
  @ViewChild(MatSort) activeSort!: MatSort;
  @ViewChild(MatSort) closedSort!: MatSort;

  constructor(private EventsManagementS: EventsManagementService) {
    this.activeEventList = new MatTableDataSource<MANAGED_EVENT>(
      this.EventsManagementS.getActiveEvents()
    );
    this.closedEventList = new MatTableDataSource<MANAGED_EVENT>(
      this.EventsManagementS.getClosedEvents()
    );
  }
  ngAfterViewInit() {
    this.activeEventList.paginator = this.activePaginator;
    this.closedEventList.paginator = this.closedPaginator;
    this.activeEventList.sort = this.activeSort;
    this.closedEventList.sort = this.closedSort;
  }
  applyFilterActive(evTarg: EventTarget | null) {
    let filterValue = (evTarg as HTMLInputElement).value;
    this.applyFilter(filterValue, this.activeEventList);
  }
  applyFilter(filterValue: string, table: MatTableDataSource<MANAGED_EVENT>) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    table.filter = filterValue;
  }
}
