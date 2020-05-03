import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search';
import { TagsPageComponent } from './tags-page/tags-page';

import { HttpClientModule } from '@angular/common/http';
import { OmdbApiService } from './services/omdb-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TagsPageComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
