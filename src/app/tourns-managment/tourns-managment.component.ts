import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { TournsManagementService } from '../service/tourns-management.service';
import { MANAGED_TOURN } from '../interface-repos';

@Component({
  selector: 'app-events-management',
  templateUrl: './tourns-managment.component.html',
  styleUrls: ['./tourns-managment.component.scss'],
})
export class TournsManagementComponent {
  activeTournList: MatTableDataSource<MANAGED_TOURN>;
  closedTournList: MatTableDataSource<MANAGED_TOURN>;
  closedToggle = false;

  displayedColumns = ['edit', 'idTourn', 'name', 'sport', 'level', 'role'];

  @ViewChild(MatPaginator)
  activePaginator!: MatPaginator;
  @ViewChild(MatPaginator)
  closedPaginator!: MatPaginator;
  @ViewChild(MatSort) activeSort!: MatSort;
  @ViewChild(MatSort) closedSort!: MatSort;

  constructor(private TournsManagementS: TournsManagementService) {
    this.activeTournList = new MatTableDataSource<MANAGED_TOURN>(
      this.TournsManagementS.getActiveTourns()
    );
    this.closedTournList = new MatTableDataSource<MANAGED_TOURN>(
      this.TournsManagementS.getClosedTourns()
    );
  }
  ngAfterViewInit() {
    this.activeTournList.paginator = this.activePaginator;
    this.closedTournList.paginator = this.closedPaginator;
    this.activeTournList.sort = this.activeSort;
    this.closedTournList.sort = this.closedSort;
  }
  applyFilterActive(evTarg: EventTarget | null) {
    let filterValue = (evTarg as HTMLInputElement).value;
    this.applyFilter(filterValue, this.activeTournList);
  }
  applyFilter(filterValue: string, table: MatTableDataSource<MANAGED_TOURN>) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    table.filter = filterValue;
  }
}
