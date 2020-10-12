import { Component, OnInit } from '@angular/core';
declare var cloudinary: any;

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  constructor() { }

  title = "Cloudinary Angular Product Gallery Page";

  ngOnInit(){

  	this.myGallery = cloudinary.galleryWidget({
      container: "#my-gallery",
      cloudName: "demo",
      mediaAssets: [
        { tag: "electric_car_product_gallery_demo" }, // by default mediaType: "image"
        { tag: "electric_car_product_gallery_demo", mediaType: "video" },
        { tag: "electric_car_360_product_gallery_demo", mediaType: "spin" }
      ]
    });
  }

  myGallery;

  openGallery() {
    this.myGallery.render();
  }

}
