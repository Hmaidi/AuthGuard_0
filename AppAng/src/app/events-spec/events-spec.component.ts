import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-events-spec',
  templateUrl: './events-spec.component.html',
  styleUrls: ['./events-spec.component.css']
})
export class EventsSpecComponent implements OnInit {
  ListEventsSpec = [];
  constructor( private eventsServices: EventsService) { }

  ngOnInit() {

    this.eventsServices.getEventsSpec().subscribe(
      res => this.ListEventsSpec = res,
      err => console.log(err)
    );
  }

}
