import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { MatchsManagementService } from '../service/matchs-management.service';
import { MANAGED_MATCH } from '../interface-repos';

@Component({
  selector: 'app-matchs-managment',
  templateUrl: './matchs-managment.component.html',
  styleUrls: ['./matchs-managment.component.scss'],
})
export class MatchsManagmentComponent {
  activeMatchList: MatTableDataSource<MANAGED_MATCH>;
  closedMatchList: MatTableDataSource<MANAGED_MATCH>;
  closedToggle = false;

  displayedColumnsA = [
    'edit',
    'idMatch',
    'idEvent',
    'nameEvent',
    'idTourn',
    'nameTourn',
    'stage',
    'idPool',
    'idTeamA',
    'nameTeamA',
    'idTeamB',
    'nameTeamB',
    'role',
  ];

  displayedColumnsC = [
    'edit',
    'idMatch',
    'idEvent',
    'nameEvent',
    'idTourn',
    'nameTourn',
    'stage',
    'idPool',
    'winner',
    'idTeamA',
    'nameTeamA',
    'idTeamB',
    'nameTeamB',
    'role',
  ];

  @ViewChild(MatPaginator)
  activePaginator!: MatPaginator;
  @ViewChild(MatPaginator)
  closedPaginator!: MatPaginator;
  @ViewChild(MatSort) activeSort!: MatSort;
  @ViewChild(MatSort) closedSort!: MatSort;

  constructor(private MatchsManagementS: MatchsManagementService) {
    this.activeMatchList = new MatTableDataSource<MANAGED_MATCH>(
      this.MatchsManagementS.getActiveMatchs()
    );
    this.closedMatchList = new MatTableDataSource<MANAGED_MATCH>(
      this.MatchsManagementS.getClosedMatchs()
    );
  }
  ngAfterViewInit() {
    this.activeMatchList.paginator = this.activePaginator;
    this.closedMatchList.paginator = this.closedPaginator;
    this.activeMatchList.sort = this.activeSort;
    this.closedMatchList.sort = this.closedSort;
  }
  applyFilterActive(evTarg: EventTarget | null) {
    let filterValue = (evTarg as HTMLInputElement).value;
    this.applyFilter(filterValue, this.activeMatchList);
  }
  applyFilter(filterValue: string, table: MatTableDataSource<MANAGED_MATCH>) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    table.filter = filterValue;
  }
}
