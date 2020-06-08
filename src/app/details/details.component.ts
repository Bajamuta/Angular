import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showDetails = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggle()
  {
    this.showDetails = !this.showDetails;
    this.log.push(this.log.length + 1);
  }

}
