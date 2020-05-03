import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { SearchComponent } from './search/search';
import { TagsPageComponent } from './tags-page/tags-page';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'search', component: SearchComponent },
{ path: 'tags-page', component: TagsPageComponent },
{ path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);



