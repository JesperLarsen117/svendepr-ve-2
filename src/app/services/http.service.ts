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
  getCamps(id) {
    return (id === '') ? this.http.get('https://api.mediehuset.net/mediesuset/camps')
      : this.http.get(`https://api.mediehuset.net/mediesuset/camps/${id}`);
  }
  getTickets(id) {
    return (id === '') ? this.http.get('https://api.mediehuset.net/mediesuset/tickets')
      : this.http.get(`https://api.mediehuset.net/mediesuset/tickets/${id}`);
  }
}
