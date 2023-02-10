import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StageCreationComponent } from './stage-creation/stage-creation.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TournInscriptionComponent } from './tourn-inscription/tourn-inscription.component';
import { SelectFilteredComponent } from './select-filtered/select-filtered.component';
import { EventsManagementComponent } from './events-management/events-management.component';
import { TournsManagementComponent} from './tourns-managment/tourns-managment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StageCreationComponent,
    TournInscriptionComponent,
    SelectFilteredComponent,
    EventsManagementComponent,
    TournsManagementComponent,

  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTreeModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'stage-creation', component: StageCreationComponent },
      { path: 'tourn-inscription', component:TournInscriptionComponent },
      { path: 'events-management', component: EventsManagementComponent },
      { path: 'tourns-management', component: TournsManagementComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
