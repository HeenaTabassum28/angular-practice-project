import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData = ['Manager1', 'Developer', 'Supervisor']
  department = ['Manager', 'Developer', 'Supervisor']
  constructor() { }

  ngOnInit(): void {
  }

}
