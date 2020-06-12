import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-cockpit-element',
  templateUrl: './cockpit-element.component.html',
  styleUrls: ['./cockpit-element.component.css']
})
export class CockpitElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('cockpitElem') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log(changes);
  }

  ngDoCheck()
  {

  }

  ngOnInit(): void {
  }

  ngAfterContentInit()
  {
    
  }

}
