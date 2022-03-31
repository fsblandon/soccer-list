import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Team } from '../models/team.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams: Team[] = [];
  idCompetition: number;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.idCompetition = Number(params.get('id'));
        this.getTeams(this.idCompetition);
      }
    );
  }

  getTeams(idCompetition: number) {
    this.data.getTeamsCompetition(idCompetition).subscribe(
      (data) => {
        this.teams = data.teams;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goBack() {
    this.navCtrl.back();
  }

}
