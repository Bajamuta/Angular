import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is warning.</p>
  `,
  styles: [`
    p
    {
      padding: 20px;
      background-color: red;
      color: white;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
