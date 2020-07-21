import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData = {
    uname : 'admin',
    income : 123456,
    rating : 5.98776,
    DOB : new Date('11/11/2019'),
    description : 'Learning Custom Pipe, how it would work.'
  }

}