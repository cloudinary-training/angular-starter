import { Component, OnInit } from '@angular/core';
import {ScriptService} from '../../script_handling/script.service';

declare var cloudinary: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor(public scriptService: ScriptService) { }

  ngOnInit(): void {

  	this.scriptService.load('cloudinary-core', 'cld-video-player').then(data => {
    	console.log('script loaded ', data);

    	var cld = cloudinary.Cloudinary.new({ cloud_name: "vdeub", secure: true});

  		var player = cld.videoPlayer('demo-player');
		player.source('samples/elephants');
	}).catch(error => console.log(error));

  	
  }

}
