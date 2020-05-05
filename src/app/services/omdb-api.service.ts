import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OmdbApiService {

private _siteURL='https://www.omdbapi.com/';
private _key='fceec74b';
constructor(private _http:HttpClient) { }

  getGameName(gameName): Observable<IOMDBResponse> {
return this._http.get<IOMDBResponse>(this._siteURL + this._key + gameName)
.pipe(
tap(data => console.log('Gamedata/error' + JSON.stringify(data))),
catchError(this.handleError));
  }

  getGameData(gameName): Observable<IOMDBResponse> {
return this._http.get<IOMDBResponse>(this._siteURL + this._key + gameName)
.pipe(
tap(data => console.log('Gamedata/error' + JSON.stringify(data))),
catchError(this.handleError));
  }
}

