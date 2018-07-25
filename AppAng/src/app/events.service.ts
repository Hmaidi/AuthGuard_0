import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private UrlEvents = 'http://localhost:3000/api/events';
  private UrlEventSpec = 'http://localhost:3000/api/eventsSpec';
  constructor(private http: HttpClient) { }

  getEvents( ) {
    return this.http.get<any>(this.UrlEvents ) ;
  }
  getEventsSpec() {
    return this.http.get<any>(this.UrlEventSpec ) ;
  }
}
