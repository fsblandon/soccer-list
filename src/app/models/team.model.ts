import { Competition } from './competition.model';
import { Squad } from './squad.model';

export interface Team {
  id: number;
  area: {
    id: number;
    name: string;
  };
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: string;
  clubColors: string;
  venue: string;
  lastUpdated: Date;
  activeCompetitions: Competition[];
  squad?: Squad[];
}
