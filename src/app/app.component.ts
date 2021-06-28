import { Component } from '@angular/core';
import { Voiture } from 'src/Model/Voiture';
import { VoitureService } from 'src/Service/VoitureService';
import { VoitureComponent } from './garage/voiture/voiture.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // voitures: Array<Voiture> = [new Voiture("Chrysler", "Pt cruiser"), new Voiture("Peugeot", "308")];
  voitures: Array<Voiture> = [];
  theSelectedVoiture: Voiture = new Voiture("","");

  constructor(private voitureService: VoitureService){
    
  }

  ngOnInit(){
    
  }

// addVoitureToList(voitureEvent: Voiture) {
//   this.voitures.push(voitureEvent);
// }

onReceivedSelectedVoiture(voiture: Voiture){
  this.theSelectedVoiture = voiture;
}


// alertMessage()
// {
// alert("Vous venez de cliquer sur le bouton");
// }


}
