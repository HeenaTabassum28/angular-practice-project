import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  isFavorite = false;

  @Output()
  myEvent = new EventEmitter()

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.myEvent.emit({myValue : this.isFavorite})
  }

}
