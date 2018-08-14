import { Component, OnInit, Host } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Game } from '../../models/game';
import { FileService } from '../../services/file.service';
import { hostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-index-games',
  templateUrl: './index-games.component.html',
  styleUrls: ['./index-games.component.css']
})
export class IndexGamesComponent implements OnInit {
  private host: String = 'http://www.santraplaystation.com';

  public allGames: Array<Game> = new Array<Game>();

  constructor(private dataService: DataService, private fileService: FileService) {
  }

  ngOnInit() {
    this.dataService.getAllGames().subscribe((res: any) => {
      res.forEach(el => {
        if (!isNaN(parseInt(el.image, 0))) {
          this.fileService.getFile(el.image).subscribe((t: any) => {
            el.image = t.path.replace('/home/u8104004/public_html', this.host);
            this.allGames.push(
              new Game(
                el.id,
                el.name,
                el.description,
                el.platform,
                el.image,
                el.type,
                el.publisher,
                el.comingDate,
                el.createdDate,
                el.modifiedDate,
                el.createdBy
              )
            );
          });
        } else {
          this.allGames.push(
            new Game(
              el.id,
              el.name,
              el.description,
              el.platform,
              el.image,
              el.type,
              el.publisher,
              el.comingDate,
              el.createdDate,
              el.modifiedDate,
              el.createdBy
            )
          );
        }
      });
    });
  }

}
