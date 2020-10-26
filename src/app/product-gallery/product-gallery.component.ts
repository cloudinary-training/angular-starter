import { Component, OnInit } from '@angular/core';
import {ScriptService} from '../../script_handling/script.service';

declare var cloudinary: any;

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  constructor(public scriptService: ScriptService) { }

  title = "Cloudinary Angular Product Gallery Page";

  ngOnInit(){

    this.scriptService.load('cld-product-gallery').then(data => {
      console.log('script loaded ', data);

      this.myGallery = cloudinary.galleryWidget({
        container: "#my-gallery",
        cloudName: "demo",
        mediaAssets: [
          { tag: "electric_car_product_gallery_demo" }, // by default mediaType: "image"
          { tag: "electric_car_product_gallery_demo", mediaType: "video" },
          { tag: "electric_car_360_product_gallery_demo", mediaType: "spin" }
        ]
      });
    }).catch(error => console.log(error));
  }

  myGallery;

  openGallery() {
        this.myGallery.render();
  } 
}
