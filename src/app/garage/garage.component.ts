import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/Model/Voiture';
import { VoitureService } from 'src/Service/VoitureService';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  voitures:Array<Voiture> = [];
  theSelectedVoiture: Voiture = new Voiture("", "");

  constructor(private voitureService: VoitureService) {
    // this.voitureService = voitureService;
  }

  ngOnInit(): void {
    this.voitures = this.voitureService.voitures;
  }

  onReceivedSelectedVoiture(voiture: Voiture) {
    this.theSelectedVoiture = voiture;
  }

}
