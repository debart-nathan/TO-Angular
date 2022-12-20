import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TournComponent } from './tourn/tourn.component';
import { TournCreationComponent } from './tourn-creation/tourn-creation.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { MatchComponent } from './match/match.component';
import { MatchEditionComponent } from './match-edition/match-edition.component';
import { StageCreationComponent } from './stage-creation/stage-creation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventComponent,
    TournComponent,
    TournCreationComponent,
    EventCreationComponent,
    MatchComponent,
    MatchEditionComponent,
    StageCreationComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'stage-creation', component: StageCreationComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
