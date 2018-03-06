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
  repos = [];
  username : string = '';
  repo : string = '';

  constructor(private http : Http){
    console.log('fetching data starts');
  }

  addRepoData(){
    console.log('I am in'+this.username+'  '+this.repo);
    var apiUrl : string = 'https://api.github.com/repos/'+this.username+'/'+this.repo;

    //reset fields
    this.username = '';
    this.repo = '';

    //api call
    return this.http.get(apiUrl).map((res : Response)=> res.json()).subscribe(data=>{
      this.repos.push(data);
      console.log(data);
    });
  }


  }
}
