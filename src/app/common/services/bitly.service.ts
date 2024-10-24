// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BitlyService {
//   private apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
//   private accessToken = '240a3a26194de9c1916d6f88e5ed7ce6f320ba7a'; 

//   constructor(private http: HttpClient) {}

//   shortenUrl(longUrl: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${this.accessToken}`,
//       'Content-Type': 'application/json'
//     });

//     const body = {
//       long_url: longUrl
//     };

//     return this.http.post(this.apiUrl, body, { headers });
//   }
// }










import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private apiUrl = 'https://api.tinyurl.com/create';
  private apiKey = 'nNRgzGIiQVp3NiT2clQMutn3pXSzhHb5vXMopOcK6E07lEM1OsUX0UmPgzgO';  

  constructor(private http: HttpClient) {}

  async shortenQRCodeUrl(qrStorageUrl: string): Promise<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      url: qrStorageUrl,
      domain: 'tiny.one'
    };

    try {
      const response: any = await this.http.post(this.apiUrl, body, { headers }).toPromise();
      const shortenedUrl = response.data.tiny_url;
      console.log('URL acortada:', shortenedUrl);
      return shortenedUrl;
    } catch (error) {
      console.error('Error al acortar la URL:', error);
      throw error;
    }
  }
}

