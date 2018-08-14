import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { SliderComponent } from './components/slider/slider.component';
import { IndexNewsComponent } from './components/index-news/index-news.component';
import { IndexGamesComponent } from './components/index-games/index-games.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamesComponent } from './components/games/games.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'oyunlar/:platform', component: GamesComponent},
  {path: 'haberler', redirectTo: 'haberler/son'},
  {path: 'haberler/:id', component: NewsComponent},
  {path: 'iletisim', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    SliderComponent,
    IndexNewsComponent,
    IndexGamesComponent,
    FooterComponent,
    GamesComponent,
    NewsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
