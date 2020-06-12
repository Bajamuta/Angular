import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName: string;
  newServerContent: string;
  cockpitElements : [{type: string, name: string, content: string}];

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputName: HTMLInputElement){
    this.serverCreated.emit({
      serverName: inputName.value, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint(inputName: HTMLInputElement)
  {
    this.blueprintCreated.emit({
      serverName: inputName.value, 
      serverContent: this.newServerContent});
  }

}
