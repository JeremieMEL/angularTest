import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doc-project';

  $isDisabled : boolean = true;

  constructor(){}



alertMessage()
{
alert("Vous venez de cliquer sur le bouton");
}


}
