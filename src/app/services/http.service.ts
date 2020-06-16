import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getNews() {
    return this.http.get('https://api.mediehuset.net/mediesuset/news');
  }
  getEvents() {
    return this.http.get('https://api.mediehuset.net/mediesuset/events');
  }
  getTickets() {
    return this.http.get('https://api.mediehuset.net/mediesuset/tickets');
  }
}
