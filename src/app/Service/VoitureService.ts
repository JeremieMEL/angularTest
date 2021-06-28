import { Voiture } from "src/Model/Voiture";

export class VoitureService {
  voitures: Array<Voiture> = [new Voiture("Chrysler", "Pt cruiser"), new Voiture("Peugeot", "308")];

  addVoitureToList(voiture: Voiture) {
    this.voitures.push(voiture);
    console.log("Voiture ajoutée : " + voiture.marque + " " + voiture.modele);
  }
}