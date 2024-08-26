import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.scss'
})
export class BasicDetailsComponent implements OnChanges{
  @Input() view = 'basic'
  @Output() pageChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
      console.log('basic',changes);
  }
  changePage(page:string){
    this.view =page
    this.pageChange.emit(this.view);
  }
}
