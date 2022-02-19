import { ViewPoint } from './../interfaces/viewPoint';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsSHA from 'jssha';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHotEvents() {
    return this.http.get('./assets/hotEvents.json');
  }

  getHotViewPoints(): Observable<ViewPoint[]> {
    return this.http.get<ViewPoint[]>('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?$top=12&$format=JSON', {
      headers: new HttpHeaders(this.GetAuthorizationHeader())
    });
  }

  private GetAuthorizationHeader() {
    var AppID = '670de1172e32459cbb1730bbb90f88d4';
    var AppKey = 'gidxoY-nP55pqDWTVpYwYcJDbVI';

    var GMTString = new Date().toUTCString();
    var ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    var HMAC = ShaObj.getHMAC('B64');
    var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

    return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/ }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
  }
}
