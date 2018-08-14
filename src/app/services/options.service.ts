import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  private host: String = 'http://www.santraplaystation.com';

  constructor(private httpClient: HttpClient) { }


  public getImages = {
    left: (): Observable<Object> => {
      return this.httpClient.get(this.host + '/be-test/get.php/ayar/left');
    },
    right: (): Observable<Object> => {
      return this.httpClient.get(this.host + '/be-test/get.php/ayar/right');
    },
  };

  public getPhones = {
    phone1: (): Observable<Object> => {
      return this.httpClient.get(this.host + '/be-test/get.php/ayar/phone1');
    },
    phone2: (): Observable<Object> => {
      return this.httpClient.get(this.host + '/be-test/get.php/ayar/phone2');
    }
  };

  getVideos(): Observable<Object> {
    return this.httpClient.get(this.host + '/be-test/get.php/ayar/videos');
  }
  getAdress(): String {
    return 'İhsaniye mah. Tacülvezir sok 10/A Selçuklu/Konya';
  }


}
