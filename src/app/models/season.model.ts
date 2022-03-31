export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
  };
}
