import { Voiture } from "src/Model/Voiture";

export class VoitureService {
  voitures: Array<Voiture> = [new Voiture("Chrysler", "Pt cruiser"), new Voiture("Peugeot", "308"), new Voiture("Ford", "Mustang")];

  addVoitureToList(voiture: Voiture) {
    this.voitures.push(voiture);
    console.log("Voiture ajoutée : " + voiture.marque + " " + voiture.modele);
  }
}