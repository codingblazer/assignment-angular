import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'https://api.github.com/users/codingblazer/repos';
  data : any = {};

  constructor(private http : Http){
    console.log('fetching data starts');
    this.getRepo();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl).map((res : Response)=> res.json());
  }

  getRepo(){
    this.getData().subscribe(data=>{
      console.log(data[0].name);
      this.data = data;
    });
  }
}
