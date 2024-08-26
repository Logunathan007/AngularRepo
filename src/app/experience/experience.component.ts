import { Component, OnInit } from '@angular/core';
import { LoginConnectionService } from '../services/login-connection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  loading: boolean = true;
  constructor(public lcs:LoginConnectionService,public ar:ActivatedRoute){}


  data:any = []

  ngOnInit(): void {
    this.data = this.ar.snapshot.data['data']
    this.loading = false;
  }
}
