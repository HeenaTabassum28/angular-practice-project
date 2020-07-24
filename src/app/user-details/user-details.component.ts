import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id;
  method;

  constructor(private ar : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']; 
    this.method = this.ar.snapshot.params['method'];
  }

}
