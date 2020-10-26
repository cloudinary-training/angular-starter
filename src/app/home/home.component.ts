import { Component, OnInit } from '@angular/core';
import { UploadComponent } from '../upload/upload.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	
  }

  ngOnDestroy(): void {
  	
  }

  title = "Cloudinary Angular Upload Page";

}