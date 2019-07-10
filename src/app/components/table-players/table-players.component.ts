import {
  Component,
  OnInit,
  Input,
  OnChanges,

} from '@angular/core';
import {
  Player
} from 'src/app/interfaces/player';
import {
  PlayerServicesService
} from 'src/app/services/player-services.service';
import { CalculeAgePipe } from 'src/app/pipes/calcule-age.pipe';
@Component({
  selector: 'app-table-players',
  templateUrl: './table-players.component.html',
  styleUrls: ['./table-players.component.scss']
})
export class TablePlayersComponent implements OnInit, OnChanges {

  JsonPlayer: Player[];
  JsonSavePlayer: Player[];

  @Input() name: string;
  @Input() position: string;
  @Input() age: string;

  ageCurrent: string;
  positionCurrent: string;
  nameCurrent: string;

  constructor(
    private PlayerService: PlayerServicesService,
    private pipe: CalculeAgePipe
  ) {
    this.ageCurrent = null;
    this.positionCurrent = null;
    this.nameCurrent = null;
    this.JsonPlayer = null;
  }

  ngOnInit() {
    this.getDataFromJson();
  }

  ngOnChanges(props: any) {
    let cambios = false;

    if (props.name !== undefined) {
      this.nameCurrent = props.name.currentValue;
      cambios = true;
    }

    if (props.position !== undefined) {
      this.positionCurrent = props.position.currentValue;
      cambios = true;
    }


    if (props.age !== undefined) {

      this.ageCurrent = props.age.currentValue;
      cambios = true;
    }
    if (cambios) {
      this.filterJson();
    }
  }

  getDataFromJson() {
    setTimeout(() => {
      this.PlayerService.getJsonFromUrl().subscribe(data => {
        this.JsonPlayer = data as Player[];
        this.JsonSavePlayer = this.JsonPlayer;
      });
    }, 3000)
  }

  filterJson() {
    let myError = false;

    if (this.JsonSavePlayer) {

      this.JsonPlayer = [];

      const JsonName = [];
      const JsonAge = [];
      const JsonPosition = [];

      if (this.nameCurrent && !myError) {
        this.JsonSavePlayer.forEach(element => {
          if (element.name.toUpperCase().trim().match(this.nameCurrent.toUpperCase().trim())) {
            JsonName.push(element);
          }
        });
        if (JsonName.length === 0) {
          myError = true;
        }
      }


      if (this.ageCurrent && !myError) {
        this.JsonSavePlayer.map(element => {
          const edad = this.pipe.transform(element.dateOfBirth).toString();
          if (edad.match(this.ageCurrent.toString())) {
            JsonAge.push(element);
          }
        });
        if (JsonAge.length === 0) {
          myError = true;
        }
      }


      if (this.positionCurrent) {
        this.JsonSavePlayer.map(element => {
          if (element.position.toUpperCase().trim().match(this.positionCurrent.toUpperCase().trim())) {
            JsonPosition.push(element);
          }
        });
        if (JsonPosition.length === 0) {
          myError = true;
        }
      }
      if (!myError) {
        this.filterJsonToView(JsonAge, JsonName, JsonPosition);
      }
    }
  }



  filterJsonToView(JsonAge: Player[], NameJson: Player[], JsonPosition: Player[]) {

    const JsonAgeLenght = JsonAge.length;
    const JsonNameLenght = NameJson.length;
    const JsonPositionLenght = JsonPosition.length;
    let CounterLenght = 0;

    if (JsonAgeLenght > 0) {
      CounterLenght++;
    }
    if (JsonNameLenght > 0) {
      CounterLenght++;
    }
    if (JsonPositionLenght > 0) {
      CounterLenght++;
    }

    const toValue = CounterLenght;

    this.JsonSavePlayer.map(elementP => {
      let elementCurrent = 0;

      if (JsonAgeLenght > 0) {
        JsonAge.map(element => {
          if (element === elementP) {
            elementCurrent++;
          }
        });
      }

      if (JsonNameLenght > 0) {
        NameJson.map(element => {
          if (element === elementP) {
            elementCurrent++;
          }
        });
      }


      if (JsonPositionLenght > 0) {
        JsonPosition.map(element => {
          if (element === elementP) {
            elementCurrent++;
          }
        });
      }

      if (elementCurrent === toValue) {
        this.JsonPlayer.push(elementP);
      }

    });
  }

}
