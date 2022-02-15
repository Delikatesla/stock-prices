import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FinhubService } from '../finhub.service';

@Component({
  selector: 'app-test-candlesticks',
  templateUrl: './candlesticks.component.html',
  styleUrls: ['./candlesticks.component.scss']
})
export class CandlesticksComponent implements OnChanges {
  @Input('symbol')
  symbol!: string;
  prices: any;

  constructor(private service: FinhubService){
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

    if (changes && changes['symbol']) {
      if (changes['symbol'].currentValue) {
        this.service.showCandles(this.symbol).subscribe(result => {
          console.log("candles",result);
          this.prices = [result];
        })
      }
    }

    
  }

}
