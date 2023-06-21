import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  token = '03f21fdfa9449bbfe69b5df1256c62b4d0b2ab47'
  url = 'https://api-ssl.bitly.com/v4/shorten'
  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any>{
    //const tokenHeader = new HttpHeaders({Authorization: 'Bearer '+this.token});
    const body = {
      long_url: nombreUrl
    }
    return this.http.post(this.url,body);
  }
}
