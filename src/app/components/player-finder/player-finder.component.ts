import { Component, OnInit } from '@angular/core';
import { PlayerServicesService } from 'src/app/services/player-services.service';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-player-finder',
  templateUrl: './player-finder.component.html',
  styleUrls: ['./player-finder.component.scss']
})
export class PlayerFinderComponent implements OnInit {

  JsonPlayer : Player[];
  nameToFilter : string;
  positionToFilter : string;
  ageToFilter : string;

  constructor(){
    this.nameToFilter = null;  
    this.positionToFilter = null;
    this.ageToFilter = null;
  }
  
  ngOnInit(){
    
  }
  
  nameFilter($event){
    this.nameToFilter = $event;
  }

  positionFilter($event){
    this.positionToFilter = $event;
  }
 
  ageFilter($event){
    this.ageToFilter = $event;
  }
}