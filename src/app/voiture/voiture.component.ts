import { Component, EventEmitter, Input, Output } from "@angular/core";
// import * as EventEmitter from "events";
import { Voiture } from "src/Model/Voiture";


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
// marque = "renault"
// color = "bleue"
@Input()
theVoiture: Voiture;

@Output()
selectedVoitureEvent : EventEmitter<Voiture> = new EventEmitter();

selectVoiture(){
  this.selectedVoitureEvent.emit(this.theVoiture);
}

}