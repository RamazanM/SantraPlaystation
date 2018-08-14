import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {OptionsService} from '../../services/options.service';
import { File } from '../../models/file';
import { FileService } from '../../services/file.service';
// import * as $ from 'jquery';
import * as $ from 'jquery-ui';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewChecked {


  constructor(private optionsService: OptionsService,
              private fileService: FileService) {}

  private videos: Array<any>;
  public selectedVideo: any = '';
  public bannerImages: any = {left: '', right: '' };
  private YT;
  private player;

  ngOnInit() {
    this.optionsService.getVideos().subscribe((res: any) => {
      this.videos = JSON.parse(res.value);
      this.selectedVideo = this.videos[0];
    });
    this.optionsService.getImages.left().subscribe((res: any) => {
      this.fileService.getFile(res.value).subscribe((res2: any) => {
        this.bannerImages.left = res2.path.replace('/home/u8104004/public_html', 'http://www.santraplaystation.com');
      });
    });
    this.optionsService.getImages.right().subscribe((res: any) => {
      this.fileService.getFile(res.value).subscribe((res2: any) => {
        this.bannerImages.right = res2.path.replace('/home/u8104004/public_html', 'http://www.santraplaystation.com');
      });
    });
  }

  ngAfterViewChecked(): void {
    this.loadYoutubeAPI();
    // $('#slider').hover(this.hIn, this.hOut);
  }


  loadYoutubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.player = new this.YT.Player('player', {
        videoId: this.IdFromUrl(this.selectedVideo.link),
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this)
        },
        playerVars: {
          controls: 0,
          autoplay: 1,
          modestbranding: 0,
          loop: 0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        }
      });
    };
  }
  onPlayerReady(event) {
    this.resizeIframe();
  }
  onPlayerStateChange(event) {}
  resizeIframe() {
    const frame = this.player.getIframe();
    frame.width = '100%';
    const w = frame.clientWidth;
    frame.height = w * 9 / 16;
  }
  nextVideo() {
    this.selectedVideo =
    this.videos.indexOf(this.selectedVideo) !==  this.videos.length - 1 ?
    this.videos[this.videos.indexOf(this.selectedVideo) + 1] :
    this.videos[0];
    this.player.loadVideoById(this.IdFromUrl(this.selectedVideo.link));
  }
  prevVideo() {
    this.selectedVideo =
    this.videos.indexOf(this.selectedVideo) !==  0 ?
    this.videos[this.videos.indexOf(this.selectedVideo) - 1] :
    this.videos[this.videos.length - 1];
    this.player.loadVideoById(this.IdFromUrl(this.selectedVideo.link));
  }
  stopVideo() {
    this.player.stopVideo();
  }

  IdFromUrl(url: String) {
    return url.match(/\?v=[A-z0-9]+/g)[0].slice(3);
  }

  // ABOUT SLIDER
  hIn() {
    $('.sliderleft').show('slide', {
      direction: 'left'
    }, 400);
    $('.sliderright').show('slide', {
      direction: 'right'
    }, 400);
  }
  hOut() {
    $('.sliderleft').hide('slide', {
      direction: 'left'
    }, 400);
    $('.sliderright').hide('slide', {
      direction: 'right'
    }, 400);
  }
}
