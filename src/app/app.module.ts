import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import * as Cloudinary from "cloudinary-core";
import { RouterModule, Routes } from '@angular/router';


import {
  CloudinaryModule,
  CloudinaryConfiguration
} from "@cloudinary/angular-5.x";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';

import { UploadComponent } from './upload/upload.component';
import { UploadModule } from './upload/upload.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MediaLibraryComponent } from './media-library/media-library.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import {ScriptService} from '../script_handling/script.service';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product-gallery', component: ProductGalleryComponent },
  { path: 'media-library', component: MediaLibraryComponent },
  { path: 'video-player', component: VideoPlayerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
]


@NgModule({
  declarations: [AppComponent, ProductGalleryComponent, HomeComponent, MediaLibraryComponent, VideoPlayerComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes), UploadModule,BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, CloudinaryModule.forRoot(Cloudinary, {
    cloud_name: ""
  } as CloudinaryConfiguration)],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule {}