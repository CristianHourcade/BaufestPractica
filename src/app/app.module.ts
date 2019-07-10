import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerFinderComponent } from './components/player-finder/player-finder.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TablePlayersComponent } from './components/table-players/table-players.component';
import { CalculeAgePipe } from './pipes/calcule-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerFinderComponent,
    FormFilterComponent,
    TablePlayersComponent,
    CalculeAgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CalculeAgePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
