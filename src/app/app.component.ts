import { Component, OnInit } from '@angular/core';
import { FinhubService } from './finhub.service';

@Component({
  selector: 'app-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  stocks: any;
  selectedStock!: string;
  constructor(private service: FinhubService){  
  
  }
  ngOnInit(): void {
      this.service.getStocks().subscribe(result => {
        console.log(result);
        this.stocks = result;
      })
      console.log(this.stocks)
  }
  selectRow(item: any) {
    console.log(item)
    this.selectedStock = item.selectedRowKeys[0];
  }
}