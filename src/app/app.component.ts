import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  name: string; //do zawolania imienia uzytkownika
  cockpitElements = [{type: 'server', name: 'Testserver', content: 'just some tests'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.cockpitElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName:string, serverContent:string})
  {
      this.cockpitElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
