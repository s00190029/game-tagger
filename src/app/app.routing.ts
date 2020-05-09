import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home';
import { SearchComponent } from './search/search';
import { TagsPageComponent } from './tags-page/tags-page';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { OmdbApiService } from './services/omdb-api.service';

import { CommonModule } from '@angular/common';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'search', component: SearchComponent },
{ path: 'tags-page', component: TagsPageComponent },
{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }


