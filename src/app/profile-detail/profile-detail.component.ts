import { Component, Input, OnInit } from '@angular/core';
import { FinhubService } from '../finhub.service';

@Component({
  selector: 'app-test-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  @Input('symbol')
  symbol!: string;
  profile: any;

  constructor(private service: FinhubService){
  }
  ngOnInit(): void {
      this.service.getProfile(this.symbol).subscribe(result => {
        console.log(result);
        this.profile = [result];
      })
  }

}
