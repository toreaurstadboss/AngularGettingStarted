import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
 // tslint:disable-next-line: member-ordering
 @Input() rating = 4;
 starWidth: number;
 @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

 onClick(): void {
   this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
 }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = (this.rating * 75) / 5;
  }

}
