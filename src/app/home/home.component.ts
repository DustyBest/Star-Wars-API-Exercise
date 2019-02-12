import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import {ClrDatagridStateInterface} from "@clr/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ PeopleService ]
})
export class HomeComponent implements OnInit {

  currentPage = 1;
  total = 0;
  people : any = [];
  loading = true;
  selected;

  constructor(private people$: PeopleService ) { 
    
    
  }

  refresh(state: ClrDatagridStateInterface) {
    console.log(state);
    this.loading = true;
    this.people$.get(this.currentPage).subscribe((data:any)  => {
      console.log(data);
      this.people = data.results;
      this.total = data.count;
      this.loading = false;
    })
  }

  ngOnInit(){}
}
