import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnChanges{
  @Input() view = 'features'

  @Output() pageChange = new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log('features',changes);
  }
  changePage(page:string){
    this.view =page
    this.pageChange.emit(this.view);
  }
}
