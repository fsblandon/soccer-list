import { Season } from './season.model';

export interface Competition {
  id: number;
  area: {
    id: number;
    name: string;
    countryCode?: string;
    ensignUrl?: string;
  };
  name: string;
  code: string;
  emblemUrl?: string;
  plan: string;
  currentSeason?: Season;
  seasons?: Season[];
  numberOfAvailableSeasons?: number;
  lastUpdated: Date;
}
