import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cockpit-element',
  templateUrl: './cockpit-element.component.html',
  styleUrls: ['./cockpit-element.component.css']
})
export class CockpitElementComponent implements OnInit {
  @Input('cockpitElem') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
