import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-contact',
  templateUrl: './dynamic-contact.component.html',
  styleUrl: './dynamic-contact.component.scss'
})
export class DynamicContactComponent implements  DoCheck,OnInit,OnChanges{
  firstname = "";
  constructor(private ar:ActivatedRoute){
  } 
  ngOnInit(): void {
    console.log("Ng on init is work");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Ng on change is work");
  }
  ngDoCheck(): void {
    console.log("Do check is work");
  }
}
