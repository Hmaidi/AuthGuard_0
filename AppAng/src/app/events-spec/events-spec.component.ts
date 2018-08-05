import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

import { Router } from '@angular/router';


@Component({
  selector: 'app-events-spec',
  templateUrl: './events-spec.component.html',
  styleUrls: ['./events-spec.component.css']
})
export class EventsSpecComponent implements OnInit {
  ListEventsSpec = [];
  constructor( private eventsServices: EventsService, private router: Router) { }

  ngOnInit() {

    this.eventsServices.getEventsSpec().subscribe(
      res => this.ListEventsSpec = res,
      err => {
        if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
        }
      }
    );
  }

}
