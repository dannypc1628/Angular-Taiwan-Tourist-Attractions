import { DataService } from './../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
DataService
@Component({
  selector: 'app-hot-event',
  templateUrl: './hot-event.component.html',
  styleUrls: ['./hot-event.component.scss']
})
export class HotEventComponent implements OnInit {
  datas: any;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getHotEvents().subscribe(result => this.datas = result);
  }

}
