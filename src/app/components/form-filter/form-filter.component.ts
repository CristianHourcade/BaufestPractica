import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent implements OnInit {

  @Output() namefilter = new EventEmitter();
  @Output() positionfilter = new EventEmitter();
  @Output() agefilter = new EventEmitter();

  name: string;
  position: string;
  age: string;

  nameError : boolean;
  positionError : boolean;
  ageError : boolean;

  constructor() {
    this.name = "";
    this.position = "";
    this.age = "";

    this.nameError = false;
    this.ageError = false;
    this.positionError = false;
  }

  ngOnInit() {}

  sendNombre() {
    if (/^[a-zA-Záéíóúäëïöü\s]*$/.test(this.name) || this.name.length === 0) {
      this.namefilter.emit(this.name);
      this.nameError = false;
    } else {
      this.nameError = true;
    }
  }

  sendPosition() {
    this.positionfilter.emit(this.position)
  }

  sendAge() {
    if (!/^[a-zA-Záéíóúäëïöü\s]*$/.test(this.age) || this.age.toString().length === 0) {
      this.agefilter.emit(this.age);
      this.ageError = false;
    } else {
      this.ageError = true;
    }
  }
  
  search(){
    this.sendAge();
    this.sendNombre();
    this.sendPosition();
  }
}