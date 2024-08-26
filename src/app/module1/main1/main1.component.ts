import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrl: './main1.component.scss'
})
export class Main1Component{
  view = "basic";
  tierUpdation = false
  changeView(page:string){
    this.view = page;
  }
  changeTierUpdation(flag:boolean){
    this.tierUpdation = flag;
  }
}
