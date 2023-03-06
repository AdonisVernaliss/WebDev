import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from "./card/card.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AlbumListComponent } from './album-list/album-list.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumListComponent},
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent,
    TopBarComponent,
    AlbumListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
