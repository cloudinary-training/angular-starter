import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import * as Cloudinary from "cloudinary-core";

import {
  CloudinaryModule,
  CloudinaryConfiguration
} from "@cloudinary/angular-5.x";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CloudinaryModule.forRoot(Cloudinary, {
    cloud_name: "pictures77"
  } as CloudinaryConfiguration)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
