import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Competition } from '../models/competition.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  competitions: Competition[] = [];
  subscriptions: Subscription;

  constructor(
    private data: DataService
  ) {}

  ngOnInit(): void {
      this.getCompetitions();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getCompetitions() {
    this.subscriptions = this.data.getAllCompetitions().subscribe(
      (data) => {
        this.competitions = data.competitions;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
