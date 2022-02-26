import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { RootObject, subdata } from './models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  subdata: RootObject;
  data: RootObject;
  resdata: any;
  name = 'Angular';
  constructor(private api: ApiService) {}

  ngOnInit() {}

  onClick() {
    this.api
      .getData()
      .then((res) => {
        this.data = res;
        //console.log(this.data);
      })
      .then((res) => {
        this.subdata = this.data[0];
        this.subdata.something = 'somethingvalue';
      })
      .then((res) => {
        delete this.subdata.email;
        delete this.subdata.website;
        delete this.subdata.phone;
        delete this.subdata.company;
        delete this.subdata.address;
        this.subdata.something = 'newsomethingvalue';
        console.log(this.subdata);
      })
      .then((res) => {
        this.api.getResData().subscribe((val) => {
          this.resdata = val;
        });
      });

    //console.log(this.subdata);
  }
}
