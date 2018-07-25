import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service' ;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
   ListEvents = [];
  constructor( private eventsServices: EventsService) { }

  ngOnInit() {
    this.eventsServices.getEvents()
    .subscribe(
      res => this.ListEvents = res,
      err => console.log(err)
      );
  }

}
