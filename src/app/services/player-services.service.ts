import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServicesService {

  constructor( 
    private HttpCliente : HttpClient
  ) { }

  getJsonFromUrl(){
    return this.HttpCliente.get("https://football-players-b31f2.firebaseio.com/players.json");
  }
}
