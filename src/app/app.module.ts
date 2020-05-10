import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search';
import { TagsPageComponent } from './tags-page/tags-page';

import { HttpClientModule } from '@angular/common/http';
import { OmdbApiService } from './services/omdb-api.service';

import { HomeComponent } from './home/home';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TagsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
