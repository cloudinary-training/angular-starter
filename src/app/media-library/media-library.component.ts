import { Component, OnInit } from '@angular/core';
import {ScriptService} from '../../script_handling/script.service';

declare var cloudinary: any;

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.css']
})
export class MediaLibraryComponent implements OnInit {

  constructor(public scriptService: ScriptService) { }

  ngOnInit(): void {

    this.scriptService.load('cld-media-library').then(data => {
      console.log('script loaded ', data);

      var timeStamp = Math.round(new Date() / 1000);

      (<any>window).ml = cloudinary.openMediaLibrary({
        cloud_name: 'vdeub',
        api_key: '992331819617412',
        username: 'loic.vdb@cloudinary.com',
        timestamp: timeStamp,
        inline_container: '#media-library-container',
        multiple: true,
        max_files: 8,
      }, {
       insertHandler: function (data) {
         data.assets.forEach(asset => { console.log("Inserted asset:", 
           JSON.stringify(asset, null, 2)) })
        }
      })
    }).catch(error => console.log(error));
  }
}
