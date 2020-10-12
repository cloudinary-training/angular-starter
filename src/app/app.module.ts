import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import * as Cloudinary from "cloudinary-core";

import {
  CloudinaryModule,
  CloudinaryConfiguration
} from "@cloudinary/angular-5.x";

import { AppComponent } from "./app.component";
import { UploadComponent } from './upload/upload.component';
import { UploadModule } from './upload/upload.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UploadModule, CloudinaryModule.forRoot(Cloudinary, {
    cloud_name: ""
  } as CloudinaryConfiguration)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
