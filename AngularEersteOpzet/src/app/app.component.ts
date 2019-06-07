import { Component, OnInit } from '@angular/core';
import { ApiService} from './api.service';
import { HtmlItem} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pwaVecozoInnovatieAngular';
  htmlItems: Array<HtmlItem>;
  constructor(private apiService: ApiService){
  }
  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    this.apiService.fetch().subscribe((data: Array<HtmlItem>) =>{
      console.log(data);
      this.htmlItems= data;      
    });
  }

}
