import { Component, EventEmitter, Output } from "@angular/core";
import { Voiture } from "src/Model/Voiture";
import { VoitureService } from "src/Service/VoitureService";

@Component({
  selector: "app-gestionnaire",
  templateUrl: "./gestionnaire.component.html",
  styleUrls: ["./gestionnaire.component.css"]
})
export class GestionnaireComponent {
  newMarque: string = '';
  newModele: string = '';

  constructor(private voitureService:VoitureService){

  }


  ajouterVoiture() {
    let voiture = new Voiture(this.newMarque, this.newModele);
    
    this.voitureService.addVoitureToList(voiture);

    console.log("Voiture ajoutée : " + this.newMarque + " " + this.newModele);
  }
}
