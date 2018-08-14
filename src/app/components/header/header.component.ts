import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.menuac').click(function () {
      $(this).next('.menu').slideToggle({
        duration: 500,
      });
    });
  }
}
