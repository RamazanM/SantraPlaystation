import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public allNews: Array<News> = new Array<News>();
  public selectedNews: News = new News();

  private host: String = 'http://www.santraplaystation.com';
  public symbols = [
    this.host + '/src/img/ucgen.png',
    this.host + '/src/img/carpi.png',
    this.host + '/src/img/daire.png',
    this.host + '/src/img/kare.png'
  ];

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    $(document).ready(() => {
      setTimeout(
        () => {
          let y;
          $('.devambutton').click((e) => {
            const db = $(e)[0].target;
            const kb = $(db).parent().find($('.kapatbutton'));

            y = $($(e)[0].target).parent().parent().find($('.detay'));
            y.css('display', 'block');
            $(db).css('display', 'none');
            $(kb).css('display', 'block');
          });

          $('.kapatbutton').click((e) => {
            const kb = $(e)[0].target;
            const db = $(kb).parent().find($('.devambutton'));
            y = $($(e)[0].target).parent().parent().find($('.detay'));
            y.css('display', 'none');
            $(kb).css('display', 'none');
            $(db).css('display', 'block');
          });
        }, 2000
      );
    });


    this.dataService.getAllNews().subscribe((res: any) => {
      res.forEach(el => {
        this.allNews.push(
          new News(
            el.id,
            el.title,
            el.description,
            el.image,
            el.createdDate,
            el.modifiedDate,
            el.createdBy,
            el.views));
      });
      this.selectedNews = this.allNews[0];
      this.activatedRoute.params.subscribe((data) => {
        this.selectedNews = this.allNews.find(news => news.id === data.id);

      });
    });
  }
}
