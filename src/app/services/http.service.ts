import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getNews(id) {
    return (id === '') ? this.http.get('https://api.mediehuset.net/mediesuset/news')
      : this.http.get(`https://api.mediehuset.net/mediesuset/news/${id}`);
  }
  newsLetter(formData, header) {
    return this.http.post('https://api.mediehuset.net/mediesuset/newsletter', formData, header);
  }
  getEvents(id) {
    return (id === '') ? this.http.get('https://api.mediehuset.net/mediesuset/events')
      : this.http.get(`https://api.mediehuset.net/mediesuset/events/${id}`);
  }
  getCamps(id) {
    return (id === '') ? this.http.get('https://api.mediehuset.net/mediesuset/camps')
      : this.http.get(`https://api.mediehuset.net/mediesuset/camps/${id}`);
  }
  getSoldTickets(id, header) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/usertickets/num_by_camp_id/${id}`, header);
  }
  getTickets(id) {
    return (id === '') ? this.http.get('https://api.mediehuset.net/mediesuset/tickets')
      : this.http.get(`https://api.mediehuset.net/mediesuset/tickets/${id}`);
  }
  BuyTicket(formData, header) {
    return this.http.post(`https://api.mediehuset.net/mediesuset/usertickets`, formData, header);
  }
  getLogin(loginInfo) {
    return this.http.post('https://api.mediehuset.net/token', loginInfo);
  }
  getMyProgram(id, header) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/programme/${id}`, header);
  }
  postProgram(formData, header) {
    return this.http.post(`https://api.mediehuset.net/mediesuset/programme`, formData, header);
  }
  deleteProgram(id, header) {
    return this.http.delete(`https://api.mediehuset.net/mediesuset/programme/${id}`, header);
  }

}
