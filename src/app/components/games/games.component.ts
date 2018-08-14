import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Game } from '../../models/game';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../services/file.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  private host: String = 'http://www.santraplaystation.com';

  public games: Array<Game> = new Array<Game>();

  constructor(private dataService: DataService, private fileService: FileService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( param => {
      this.dataService.getAllGames().subscribe((res: Array<any>) => {
        this.games = new Array<Game>();
        for (const gameJson of res) {
          if (this.checkPlatform(param.platform.toString(), Number.parseInt(gameJson.platform))) {
            if (!isNaN(parseInt(gameJson.image, 0))) {
              this.fileService.getFile(gameJson.image).subscribe((t: any) => {
                gameJson.image = t.path.replace('/home/u8104004/public_html', this.host);
                this.games.push(
                  new Game(
                    gameJson.id,
                    gameJson.name,
                    gameJson.description,
                    gameJson.platform,
                    gameJson.image,
                    gameJson.type,
                    gameJson.publisher,
                    gameJson.comingDate,
                    gameJson.createdDate,
                    gameJson.modifiedDate,
                    gameJson.createdBy
                  )
                );
              });
            } else {
              this.games.push(
                new Game(
                  gameJson.id,
                  gameJson.name,
                  gameJson.description,
                  gameJson.platform,
                  gameJson.image,
                  gameJson.type,
                  gameJson.publisher,
                  gameJson.comingDate,
                  gameJson.createdDate,
                  gameJson.modifiedDate,
                  gameJson.createdBy
                )
              );
            }
          }
        }
      });
    });

  }

  checkPlatform(strPlatform: String, intPlatform: Number) {
    if (intPlatform === 0 && strPlatform === 'ps3') {
      return true;
    } else if ( intPlatform === 1 && strPlatform === 'ps4' ) {
      return true;
    } else {
      return false;
    }
  }
  toggleOnMobile(event) {
    $(event.target).parent().next('.game-info').toggle(500);
  }

}
