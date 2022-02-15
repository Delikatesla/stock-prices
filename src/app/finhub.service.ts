import { HttpClient } from '@angular/common/http';
import { ReadKeyExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinhubService {

  constructor(private http: HttpClient) { }

  getStocks() {
    return this.http.get(
      'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=' + environment.apiKey
    );
  }

  getProfile(symbol: string) {
    return this.http.get(
      'https://finnhub.io/api/v1/stock/profile2?symbol=' + symbol + '&token=' + environment.apiKey, {}
    );
  }

  showCandles(symbol: string) {
    return this.http.get(
      'https://finnhub.io/api/v1/stock/candle?symbol=' + symbol + '&resolution=D&from=1631022248&to=1631627048&token=' + environment.apiKey
    );
  }
}

// Вывести логотип в мастер дитейл вью

// keyExpr - что это, какую роль играет,
