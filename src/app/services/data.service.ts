import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private host: String = 'http://www.santraplaystation.com';

  constructor(private httpClient: HttpClient) { }
  getNews(id: Number): Observable<Object> {
    return this.httpClient.get(this.host + '/be-test/get.php/haber/' + id);
  }
  getAllNews(): Observable<Object> {
    return this.httpClient.get(this.host + '/be-test/get.php/haber');
  }
  getGame(id: Number): Observable<Object> {
    return this.httpClient.get(this.host + '/be-test/get.php/oyun/' + id);
  }
  getAllGames(): Observable<Object> {
    return this.httpClient.get(this.host + '/be-test/get.php/oyun');
  }
  sendMessage(message: Message) {
    return this.httpClient.post(this.host + '/be-test/post.php/add/message', {
      name: message.name,
      mail: message.mail,
      content: message.content
    });
  }
}
