import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tier',
  templateUrl: './tier.component.html',
  styleUrl: './tier.component.scss'
})
export class TierComponent implements OnChanges {
  @Input() view = 'tier'
  @Input() tierUpdation=false;

  @Output() updateTier = new EventEmitter<boolean>();
  @Output() pageChange = new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log('tier',changes);
  }

  changePage(page:string){
    if(this.tierUpdation && page == 'basic'){
      this.pageChange.emit('preview');
      this.updateTier.emit(false);
      return;
    }
    this.view =page
    this.pageChange.emit(this.view);
  }
}
