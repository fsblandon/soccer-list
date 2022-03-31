import { Component, Input, OnInit } from '@angular/core';
import { Competition } from '../models/competition.model';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage implements OnInit {

  @Input() competition: Competition;

  availableCodes: string[] = [
    'WC', 'CL', 'BL1', 'DED', 'BSA', 'PD', 'FL1', 'ELC', 'PPL', 'EC', 'SA', 'PL', 'CLI'
  ];

  constructor() { }

  ngOnInit() {
  }

}
