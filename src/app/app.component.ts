import { Component } from '@angular/core';
import { OmdbApiService } from './services/omdb-api.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]

})
export class AppComponent {
gameData: IOMDBResponse;
errorMessage: any;
title = 'g-tagger';
constructor(private _ombdbService: OmdbApiService) {
}

getGameDetails(gameName: string): boolean {
this._ombdbService.getGameData(gameName).subscribe(
gameData => {
this.gameData = gameData
console.log('Genre:' + this.gameData.Genre);
},
error => this.errorMessage = <any>error
);
return false;
}
}
