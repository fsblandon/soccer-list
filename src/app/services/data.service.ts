import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseApiURL = 'https://api.football-data.org/v2/';
  authToken = '9d892093f14741ffa8e9a0a4ecf8b874';

  constructor(
    private httpClient: HttpClient
  ) {}

  public getAllCompetitions(): Observable<any> {

    return this.httpClient.get<any>(
      this.baseApiURL + `competitions`,
      {
        headers : {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'X-Auth-Token': this.authToken
        }
      }
    );
  }

  public getTeamsCompetition(id: number): Observable<any> {
    return this.httpClient.get<any>(
      this.baseApiURL + `competitions/` + `${id}` + `/teams`,
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'X-Auth-Token': this.authToken
        }
      }
    );
  }

  public getInformationTeam(idTeam: number): Observable<any> {
    return this.httpClient.get<any>(
      this.baseApiURL + `teams/` + `${idTeam}`,
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'X-Auth-Token': this.authToken
        }
      }
    );
  }
}
