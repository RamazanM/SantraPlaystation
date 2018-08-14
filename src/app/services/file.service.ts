import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private host: String = 'http://www.santraplaystation.com';

  constructor(private httpClient: HttpClient) {}

  getFile(id: Number): Observable<Object> {
    return this.httpClient.get(this.host + '/be-test/get.php/file/' + id);
  }

}
