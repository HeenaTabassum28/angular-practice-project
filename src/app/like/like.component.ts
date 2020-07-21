import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  template: `
    <i
       class="glyphicon glyphicon-heart" 
       [class.highlighted]="iLike"
       (click)="onClick()">
    </i>
    <span>{{ totalLikes }}</span>
    `,
    styles: [`
    .glyphicon-heart {
        color: #ccc;
        cursor: pointer;
    }
    
    .highlighted {
        color: deeppink;
    }   
`]
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  totalLikes = 0;
     iLike = false;

     @Output()
     myEvent = new EventEmitter();
    
    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
        this.myEvent.emit({myValue : this.iLike})
    }

}
