import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet, NavController } from '@ionic/angular';
import { Team } from '../models/team.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss'],
})
export class TeamInfoPage implements OnInit {

  @ViewChildren(IonRouterOutlet) routerOulet: QueryList<IonRouterOutlet>;

  idTeam: number;
  team: Team;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.idTeam = Number(params.get('id'));
        this.getTeamInfo(this.idTeam);
      }
    );
  }

  getTeamInfo(idTeam: number) {
    this.data.getInformationTeam(idTeam).subscribe(
      (data) => {
        this.team = data;
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
