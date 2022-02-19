import { ViewPoint } from './../interfaces/viewPoint';
import { Observable } from 'rxjs';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-view-point',
  templateUrl: './hot-view-point.component.html',
  styleUrls: ['./hot-view-point.component.scss']
})
export class HotViewPointComponent implements OnInit {

  // datas$: Observable<ViewPoint[]>;
  // constructor(private dataService: DataService) { }

  // ngOnInit(): void {
  //   this.datas$ = this.dataService.getHotViewPoints();
  // };

  datas: ViewPoint[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getHotViewPoints().subscribe(data => {
      this.datas = data;
    });
  };
}
