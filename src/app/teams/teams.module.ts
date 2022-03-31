import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsPageRoutingModule } from './teams-routing.module';

import { TeamsPage } from './teams.page';
import { TeamInfoPageModule } from '../team-info/team-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsPageRoutingModule,
    TeamInfoPageModule
  ],
  declarations: [TeamsPage],
  exports: [TeamsPage]
})
export class TeamsPageModule {}
