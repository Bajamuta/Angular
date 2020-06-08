import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //allowNewServer: boolean = false;
  serverCreationStatus = "No server was created.";
  serverName ="";
  serverCreated = false;
  servers = ['server1', 'server2'];

  constructor() {
    /*setTimeout(() => {
      this.allowNewServer = true;
    },2000);*/
   }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreationStatus = "Server "+this.serverName+ " has been created.";
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  updateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
