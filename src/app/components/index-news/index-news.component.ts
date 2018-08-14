import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-index-news',
  templateUrl: './index-news.component.html',
  styleUrls: ['./index-news.component.css']
})

export class IndexNewsComponent implements OnInit {
  private host: String = 'http://www.santraplaystation.com';
  public news: Array<News> = new Array<News>();
  public symbols = [
    this.host + '/src/img/ucgen.png',
    this.host + '/src/img/carpi.png',
    this.host + '/src/img/daire.png',
    this.host + '/src/img/kare.png'
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllNews().subscribe((res: any) => {
      res.forEach(el => {
        this.news.push(
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
    });
  }
}
