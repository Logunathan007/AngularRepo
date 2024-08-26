import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent  implements OnChanges{
  @Input() view = 'preview'

  @Output() pageChange = new EventEmitter<string>();
  @Output() updateTier = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('preview',changes);
  }
  changePage(page:string){
    this.view =page
    if(page == 'tier'){
      this.updateTier.emit(true)
    }
    this.pageChange.emit(this.view);
  }
  updation() {
    this.updateTier.emit(true);
  }
}
