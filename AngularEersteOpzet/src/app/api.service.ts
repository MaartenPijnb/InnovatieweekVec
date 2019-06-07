import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from  'rxjs';

//Item from API
export interface HtmlItem{
  name: string;
  description: string;
  url: string;
  html: string; 
  markdown: string;
}



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpointUrl: string =  "https://www.techiediaries.com/api/data.json";

  constructor(private httpClient: HttpClient) { }
  fetch(): Observable<HtmlItem[]>{
    return <Observable<HtmlItem[]>> this.httpClient.get(this.endpointUrl);
  }

  
}
